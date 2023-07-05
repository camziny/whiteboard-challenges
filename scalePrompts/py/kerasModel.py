import keras
from keras import layers


class Attention(layers.Layer):
    def __init__(self, **kwargs):
        super(Attention, self).__init__(**kwargs)

    def build(self, input_shape):
        self.W = self.add_weight(
            name="attention_weight",
            initializer="random_normal",
            shape=(input_shape[-1], 1),
        )
        self.b = self.add_weight(name="attention_bias", initializer="zeros", shape=(1,))
        super(Attention, self).build(input_shape)

    def call(self, inputs):
        query = inputs[0]
        keys = inputs[1]

        attention_scores = tf.matmul(query, self.W) + self.b
        attention_weights = tf.nn.softmax(attention_scores, axis=-1)

        context_vector = tf.matmul(attention_weights, keys)

        return context_vector


def create_attention_model(hidden_units, dense_units):
    x = Input(shape=(time_steps, input_dim))
    RNN_layer = SimpleRNN(hidden_units, return_sequences=True)
    outputs = RNN_layer(x)
    attention_layer = Attention()(outputs)
    dense_layer = Dense(dense_units, activation="softmax")
    outputs = dense_layer(attention_layer)

    model = Model(x, outputs)
    model.compile(loss="mse", optimizer="adam")

    return model


model = create_attention_model(128, 10)
model.summary()
