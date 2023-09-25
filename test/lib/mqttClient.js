'use strict';
const mqtt = require('mqtt');

function Client(cbConnected, cbChanged, config) {
    let that = this;
    if (typeof config === 'string') config = {name: config};
    config = config || {};
    config.url = config.url || '127.0.0.1';
    this.client = mqtt.connect(`mqtt://${config.user ? (`${config.user}:${config.pass}@`) : ''}${config.url}${config.name ? `?clientId=${config.name}` : ''}`, config);

    this.client.on('connect', () => {
        console.log(`${new Date()} test client connected to 127.0.0.1`);

        /*that.client.publish('mqtt/0/test', 'Roger1');
        client.publish('test/out/testMessage1', 'Roger1');
         client.publish('test/out/testMessage2', 'Roger2');
         client.publish('test/in/testMessage3', 'Roger3');
         client.publish('test/in/testMessage4',  'Roger4');*/

        /*client.publish('arduino/kitchen/out/temperature', '10.1');
         client.publish('arduino/kitchen/out/humidity',  '56');
         // Current light state
         client.publish('arduino/kitchen/in/lightActor', 'false');

         client.subscribe('arduino/kitchen/in/#');*/
        //client.subscribe('arduino/kitchen/in/updateInterval');
        that.client.subscribe('#');
        cbConnected && cbConnected(true);
    });

    this.client.on('message', (topic, message, packet) => {
        // message is Buffer
        if (cbChanged) {
            cbChanged(topic, message, packet);
        } else {
            console.log(`Test MQTT Client received "${topic}": ${message.toString()}`);
        }
    });
    this.client.on('close', err => {
        if (err) console.error(`Connection closed: ${err}`);
        // message is Buffer
        if (cbConnected) {
            cbConnected(false);
        } else {
            console.log('Test MQTT Client closed');
        }
    });

    this.client.on('error', error => {
        console.error(`Test MQTT Client error: ${error}`);
    });

    this.publish = (topic, message, qos, retain, cb) => {
        if (typeof qos === 'function') {
            cb = qos;
            qos = undefined;
        }
        if (typeof retain === 'function') {
            cb = retain;
            retain = undefined;
        }
        const opts = {
            retain: retain || false,
            qos: qos || 0
        };
        that.client.publish(topic,  message, opts, cb);
    };
    this.subscribe = (topic, opts, cb) => {
        if (typeof opts === 'function') {
            cb = opts;
            opts = null;
        }
        that.client.subscribe(topic, opts, cb);
    };
    this.unsubscribe = (topic, cb) => {
        that.client.unsubscribe(topic, cb);
    };
    this.destroy = () => {
        if (that.client) {
            that.client.end();
            that.client = null;
        }
    };

    this.stop = this.destroy;

    return this;
}

if (typeof module !== 'undefined' && module.parent) {
    module.exports = Client;
} else {
    new Client();
}
