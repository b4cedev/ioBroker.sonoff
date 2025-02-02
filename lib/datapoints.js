module.exports = {
    'Approx. Altitude': {type: 'number',  role: 'value.altitude',      read: true, write: false, unit: 'm'},
    'PM2.5':       {type: 'number',  role: 'value',                    read: true, write: false, unit: 'ug/m3'},
    A0:            {type: 'number',  role: 'value',                    read: true, write: false},
    A1:            {type: 'number',  role: 'value',                    read: true, write: false},
    A2:            {type: 'number',  role: 'value',                    read: true, write: false},
    A3:            {type: 'number',  role: 'value',                    read: true, write: false},
    ANALOG:        {type: 'object',  role: 'state',                    read: true, write: false},
    APMac:         {type: 'number',  role: 'state',                    read: true, write: false},
    Action:        {type: 'string',  role: 'value',                    read: true, write: true},
    AirQuality:    {type: 'number',  role: 'value',                    read: true, write: false, unit: '%'},
    Analog0:       {type: 'number',  role: 'value',                    read: true, write: false},
    Analog1:       {type: 'number',  role: 'value',                    read: true, write: false},
    Analog2:       {type: 'number',  role: 'value',                    read: true, write: false},
    Analog3:       {type: 'number',  role: 'value',                    read: true, write: false},
    ApparentPower: {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'VA'},
    Arm:           {type: 'number',  role: 'value',                    read: true, write: true},
    BSSId:         {type: 'string',  role: 'state',                    read: true, write: false},
    BatteryPercentage: {type: 'number',  role: 'value',                read: true, write: false, unit: '%'},
    BatteryVoltage:    {type: 'number',  role: 'value.voltage',        read: true, write: false, unit: 'V'},
    Bits:          {type: 'number',  role: 'value',                    read: true, write: false},
    Blue:          {type: 'number',  role: 'level.color.blue',         read: true, write: true,  min: 0, max: 100},
    Boiler:        {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    Burner:        {type: 'number',  role: 'value',                    read: true, write: false},
    C1:            {type: 'number',  role: 'value',                    read: true, write: false},
    C2:            {type: 'number',  role: 'value',                    read: true, write: false},
    C3:            {type: 'number',  role: 'value',                    read: true, write: false},
    C4:            {type: 'number',  role: 'value',                    read: true, write: false},
    CT:            {type: 'number',  role: 'level.color.temp',         read: true, write: true},
    CW:            {type: 'number',  role: 'level.color.coldwhite',    read: true, write: true},
    CW_POWER:      {type: 'boolean', role: 'switch.light',             read: true, write: true,  storeMap: true},
    CarbonDioxide: {type: 'number',  role: 'value.CO2',                read: true, write: false, unit: 'ppm'},
    Channel:       {type: 'number',  role: 'level',                    read: true, write: true},
    Collector:     {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    Color:         {type: 'string',  role: 'level.color.rgb',          read: true, write: true},
    Counter1:      {type: 'number',  role: 'value',                    read: true, write: false},
    Counter2:      {type: 'number',  role: 'value',                    read: true, write: false},
    Counter3:      {type: 'number',  role: 'value',                    read: true, write: false},
    Counter4:      {type: 'number',  role: 'value',                    read: true, write: false},
    Current:       {type: 'number',  role: 'value.current',            read: true, write: false, unit: 'A'},
    Data:          {type: 'string',  role: 'state',                    read: true, write: true},
    Days:          {type: 'string',  role: 'state',                    read: true, write: true},
    DewPoint:      {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    Dimmer:        {type: 'number',  role: 'level.dimmer',             read: true, write: true},
    Distance:      {type: 'number',  role: 'value',                    read: true, write: false, unit: 'cm'},
    Downtime:      {type: 'string',  role: 'state',                    read: true, write: false},
    Druck:         {type: 'number',  role: 'value.pressure',           read: true, write: false, unit: 'hPa'},
    TotalStartTime: {type: 'string',  role: 'value',                   read: true, write: false},
    Factor:        {type: 'number',  role: 'value',                    read: true, write: false},
    Fade:          {type: 'boolean',  role: 'switch',                  read: true, write: true},
    Faktor:        {type: 'number',  role: 'value',                    read: true, write: false},
    Feuchtigkeit:  {type: 'number',  role: 'value.humidity',           read: true, write: false, unit: '%'},
    Green:         {type: 'number',  role: 'level.color.green',        read: true, write: true,  min: 0, max: 100},
    HSBColor:      {type: 'string',  role: 'value.hsb',                read: true, write: true},
    Hostname:      {type: 'string',  role: 'state',                    read: true, write: false},
    Hue:           {type: 'number',  role: 'level.color.hue',          read: true, write: true,  min: 0}, // max ??
    Humidity:      {type: 'number',  role: 'value.humidity',           read: true, write: false, unit: '%'},
    IPAddress:     {type: 'string',  role: 'state',                    read: true, write: false},
    IPaddress:     {type: 'string',  role: 'state',                    read: true, write: false},
    IRSend:        {type: 'string',  role: 'state',                    read: true, write: true},
    Illuminance:   {type: 'number',  role: 'value.illuminance',        read: true, write: false, unit: 'lx'},
    IrReceived:    {type: 'object',  role: 'state',                    read: true, write: false},
    LED_Mode:      {type: 'number',  role: 'value',                    read: true, write: true},
    Latitude:      {type: 'number',  role: 'value.gps.latitude',       read: true, write: false, unit: '°'},
    Laufzeit:      {type: 'number',  role: 'value.duration',           read: true, write: false, unit: 'hours'}, /// ?
    LedBar:        {type: 'number',  role: 'value',                    read: true, write: true},
    LedTable:      {type: 'string',  role: 'state',                    read: true, write: false},
    Leistung:      {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'W'},
    Light:         {type: 'number',  role: 'value',                    read: true, write: false, unit: 'lx'},
    Longitude:     {type: 'number',  role: 'value.gps.longitude',      read: true, write: false, unit: '°'},
    Mode:          {type: 'number',  role: 'value',                    read: true, write: true},
    Module:        {type: 'string',  role: 'state',                    read: true, write: false},
    Noise:         {type: 'number',  role: 'value',                    read: true, write: false, unit: 'dB'},
    Output:        {type: 'number',  role: 'value',                    read: true, write: true},
    Outsidetemp:   {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    PM10:          {type: 'number',  role: 'value',                    read: true, write: false, unit: 'ug/m3'},
    POWER10:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER11:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER12:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER13:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER14:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER15:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER16:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER17:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER18:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER19:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER1:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER20:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER21:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER22:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER23:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER24:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER25:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER26:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER27:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER28:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER29:       {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER2:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER3:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER4:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER5:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER6:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER7:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER8:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER9:        {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    POWER:         {type: 'boolean', role: 'switch',                   read: true, write: true,  storeMap: true},
    Power:         {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'W'},
    Power_curr:    {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'W'},
    Pressure:      {type: 'number',  role: 'value.pressure',           read: true, write: false, unit: 'hPa'},
    PressureScaledValue:  {type: 'number',  role: 'value.pressure',    read: true, write: false, unit: 'Pa'},
    Protocol:      {type: 'string',  role: 'state',                    read: true, write: true},
    Punkt:         {type: 'number',  role: 'value',                    read: true, write: false, unit: '?'}, /// ?
    RGB_POWER:     {type: 'boolean', role: 'switch.light',             read: true, write: true,  storeMap: true},
    PWM:           {type: 'object',  role: 'state',                    read: true, write: false},
    PWM1:          {type: 'number',  role: 'value',                    read: true, write: true, min: 0, max: 1023},
    PWM2:          {type: 'number',  role: 'value',                    read: true, write: true, min: 0, max: 1023},
    PWM3:          {type: 'number',  role: 'value',                    read: true, write: true, min: 0, max: 1023},
    PWM4:          {type: 'number',  role: 'value',                    read: true, write: true, min: 0, max: 1023},
    PWM5:          {type: 'number',  role: 'value',                    read: true, write: true, min: 0, max: 1023},
    PWM6:          {type: 'number',  role: 'value',                    read: true, write: true, min: 0, max: 1023},
    PWM7:          {type: 'number',  role: 'value',                    read: true, write: true, min: 0, max: 1023},
    PWM8:          {type: 'number',  role: 'value',                    read: true, write: true, min: 0, max: 1023},
    RSSI:          {type: 'number',  role: 'value.rssi',               read: true, write: false},
    ReactivePower: {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'var'},
    Red:           {type: 'number',  role: 'level.color.red',          read: true, write: true,  min: 0, max: 100},
    Repeat:        {type: 'number',  role: 'value',                    read: true, write: true},
    RestartReason: {type: 'string',  role: 'state',                    read: true, write: false},
    Returns:       {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    Roomtemp:      {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    SHUTTER1:      {type: 'number',  role: 'state',                    read: true, write: false},
    SHUTTER2:      {type: 'number',  role: 'state',                    read: true, write: false},
    SHUTTER3:      {type: 'number',  role: 'state',                    read: true, write: false},
    SHUTTER4:      {type: 'number',  role: 'state',                    read: true, write: false},
    SSId:          {type: 'string',  role: 'state',                    read: true, write: false},
    Saturation:    {type: 'number',  role: 'level.color.saturation',   read: true, write: true,  min: 0}, //  max: 100 ??
    Scheme:        {type: 'number',  role: 'value',                    read: true, write: true},
    SeaPressure:   {type: 'number',  role: 'value.pressure',           read: true, write: false, unit: 'hPa'},
    SleepMode:     {type: 'string',  role: 'state',                    read: true, write: false},
    Solarpump:     {type: 'number',  role: 'value',                    read: true, write: false},
    Solarstorage:  {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    Spannung:      {type: 'number',  role: 'value.voltage',            read: true, write: false, unit: 'V'},
    Speed:         {type: 'number',  role: 'value',                    read: true, write: true},
    Status:        {type: 'number',  role: 'value',                    read: true, write: false},
    Strom:         {type: 'number',  role: 'value.current',            read: true, write: false, unit: 'A'},
    Switch1:       {type: 'boolean', role: 'switch',                   read: true, write: false},
    Switch2:       {type: 'boolean', role: 'switch',                   read: true, write: false},
    Switch3:       {type: 'boolean', role: 'switch',                   read: true, write: false},
    Switch4:       {type: 'boolean', role: 'switch',                   read: true, write: false},
    TVOC:          {type: 'number',  role: 'value.tvoc',               read: true, write: false, unit: 'ppb'},
    Temperatur:    {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    Temperature:   {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    Time:          {type: 'string',  role: 'state',                    read: true, write: true},
    Timer10:       {type: 'object',  role: 'state',                    read: true, write: true},
    Timer11:       {type: 'object',  role: 'state',                    read: true, write: true},
    Timer12:       {type: 'object',  role: 'state',                    read: true, write: true},
    Timer13:       {type: 'object',  role: 'state',                    read: true, write: true},
    Timer14:       {type: 'object',  role: 'state',                    read: true, write: true},
    Timer15:       {type: 'object',  role: 'state',                    read: true, write: true},
    Timer16:       {type: 'object',  role: 'state',                    read: true, write: true},
    Timer1:        {type: 'object',  role: 'state',                    read: true, write: true},
    Timer2:        {type: 'object',  role: 'state',                    read: true, write: true},
    Timer3:        {type: 'object',  role: 'state',                    read: true, write: true},
    Timer4:        {type: 'object',  role: 'state',                    read: true, write: true},
    Timer5:        {type: 'object',  role: 'state',                    read: true, write: true},
    Timer6:        {type: 'object',  role: 'state',                    read: true, write: true},
    Timer7:        {type: 'object',  role: 'state',                    read: true, write: true},
    Timer8:        {type: 'object',  role: 'state',                    read: true, write: true},
    Timer9:        {type: 'object',  role: 'state',                    read: true, write: true},
    Today:         {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'kWh'},
    Total:         {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'kWh'},
    Total_in:      {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'kWh'},
    Total_out:     {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'kWh'},
    Uptime:        {type: 'mixed',   role: 'state',                    read: true, write: false},
    UvIndex:       {type: 'number',  role: 'value.uv',                 read: true, write: false},
    UvIndexText:   {type: 'string',  role: 'state',                    read: true, write: false},
    UvLevel:       {type: 'number',  role: 'value',                    read: true, write: false},
    UvPower:       {type: 'number',  role: 'value',                    read: true, write: false, unit: 'W/m²'},
    UvaIntensity:  {type: 'number',  role: 'value',                    read: true, write: false},
    UvbIntensity:  {type: 'number',  role: 'value',                    read: true, write: false},
    VCC:           {type: 'number',  role: 'value.voltage',            read: true, write: false, unit: 'V'},
    Vcc:           {type: 'number',  role: 'value.voltage',            read: true, write: false, unit: 'V'},
    Version:       {type: 'string',  role: 'state',                    read: true, write: false},
    Voltage:       {type: 'number',  role: 'value.voltage',            read: true, write: false, unit: 'V'},
    WW:            {type: 'number',  role: 'level.color.white',        read: true, write: true},
    WW_POWER:      {type: 'boolean', role: 'switch.light',             read: true, write: true,  storeMap: true},
    Wakeup:        {type: 'string',  role: 'state',                    read: true, write: true},
    Warmwater:     {type: 'number',  role: 'value.temperature',        read: true, write: false, unit: '°C'},
    Wifi_SSId:     {type: 'string',  role: 'state',                    read: true, write: true},
    Window:        {type: 'number',  role: 'value',                    read: true, write: true},
    Yesterday:     {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'kWh'},
    eCO2:          {type: 'number',  role: 'value.eco2',               read: true, write: false, unit: 'ppm'},
    gestern:       {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'kWh'},
    heute:         {type: 'number',  role: 'value.power.consumption',  read: true, write: false, unit: 'kWh'},
    modeLedExor:   {type: 'boolean', role: 'switch',                   read: true, write: true,  def: false, desc: 'exor for white LEDs and color leds => if the white LEDs are switched on, color LEDs are switched off and vice versa'},
    modeReadColors:{type: 'boolean', role: 'switch',                   read: true, write: true,  def: true, desc: 'allow for color read from MQTT'},
    VEML6075_UvIndex:      {type: 'number',  role: 'value.uv',         read: true, write: false},
    VEML6075_UvaIntensity: {type: 'number',  role: 'value',            read: true, write: false},
    VEML6075_UvbIntensity: {type: 'number',  role: 'value',            read: true, write: false},
    VEML6075_UvIndexText:  {type: 'string',  role: 'state',            read: true, write: false},
    VEML6075_UvLevel:      {type: 'number',  role: 'value',            read: true, write: false},
    VEML6075_UvPower:      {type: 'number',  role: 'value',            read: true, write: false, unit: 'W/m²'},
};
