#include <Arduino.h>
#include <PubSubClient.h>
#include <secrets.h>

const char* DEVICE_ID = "esp-01";
const char* GATEWAY_ID = "home";

PubSubClient mqttClient(wifiClient);

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();

  if ((char)payload[0] == 'O' && (char)payload[1] == 'N') {
    digitalWrite(BUILTIN_LED, HIGH);
    Serial.println("on");
    mqttClient.publish("outTopic", "LED turned ON");
  } else if ((char)payload[0] == 'O' && (char)payload[1] == 'F' && (char)payload[2] == 'F') {
    digitalWrite(BUILTIN_LED, LOW);
    Serial.println("off");
    mqttClient.publish("outTopic", "LED turned OFF");
  }
}

void setup() {
  pinMode(BUILTIN_LED, OUTPUT);
  Serial.begin(115200);
  while (!Serial);

  mqttClient.setServer(MQTT_SERVER, 1883);
  mqttClient.setCallback(callback);

  connectMqtt();
}

void loop() {
  mqttClient.loop();
}

void connectMqtt() {
  while (!mqttClient.connected()) {
    Serial.print("Attempting MQTT connection...to {"); Serial.print(MQTT_SERVER); Serial.println("}");

    if (mqttClient.connect("ESP32_clientID")) {
      Serial.println("connected");
      subscribeAll(mqttClient);
    } else {
      Serial.print("failed, rc=");
      Serial.print(mqttClient.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void subscribeAll(PubSubClient& mqttClient) {
  mqttClient.subscribe("inTopic");
}

boolean publishSensorVal(PubSubClient& mqttClient, const char* sensorType, float value) {
  const char* units = createUnits(sensorType);
  if (strcmp(units, "ERROR") == 0) {
    Serial.println("Invalid sensor type");
    return false; // invalid sensor type
  }

  const char* topic = createTopicStr("status", sensorType, units);
  const char* payload = createPayload(value);
  Serial.print("Publishing to topic: "); Serial.println(topic);
  Serial.print("Value: "); Serial.println(payload);

  bool published = mqttClient.publish(topic, payload);

  delete[] topic;
  delete[] payload;

  return published;
}

const char* createTopicStr(const char* function, const char* sensor

