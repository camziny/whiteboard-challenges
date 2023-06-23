def write_partition_to_tfrecord_and_parquet(
    partition, partition_label, partition_id, output_path, options
):
    # Write partition to TFRecord
    file_name_tfrecord = f"{partition_label}_partition_{partition_id}.tfrecord.gz"
    output_file_path_tfrecord = os.path.join(output_path, file_name_tfrecord)
    with tf.io.TFRecordWriter(output_file_path_tfrecord, options) as writer:
        for row in partition:
            # Extract features and label from each row
            features = {
                "itshost_input": tf.train.Feature(
                    float_list=tf.train.FloatList(value=[row["itshostclaimcd"]])
                ),
                "sup_stand_scaler_input": tf.train.Feature(
                    float_list=tf.train.FloatList(value=[row["sup_stand_scaler_cl"]])
                ),
                "diag_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["diag_list"].encode("utf-8")]
                    )
                ),
                "state_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["member_state"].encode("utf-8")]
                    )
                ),
                "msa_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["member_msa"].encode("utf-8")]
                    )
                ),
                "revenuecd_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["revenuecd_cl"].encode("utf-8")]
                    )
                ),
                "procedurecd_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["procedurecd_cl"].encode("utf-8")]
                    )
                ),
                "procmodcd_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["procmodcd1_cl"].encode("utf-8")]
                    )
                ),
                "poscd_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["poscd_cl"].encode("utf-8")]
                    )
                ),
                "billingprovider_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["billingprovidernpi_cl"].encode("utf-8")]
                    )
                ),
                "renderingprovider_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["renderingprovidernpi_cl"].encode("utf-8")]
                    )
                ),
                "client_sub1_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["client_sub1"].encode("utf-8")]
                    )
                ),
                "client_sub2_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["client_sub2"].encode("utf-8")]
                    )
                ),
                "client_sub3_input": tf.train.Feature(
                    bytes_list=tf.train.BytesList(
                        value=[row["client_sub3"].encode("utf-8")]
                    )
                ),
            }
            label = tf.train.Feature(
                float_list=tf.train.FloatList(value=[row["calcdiscountamt"]])
            )

            # Create an example from the features and label
            example = tf.train.Example(
                features=tf.train.Features(feature={**features, **{"label": label}})
            )

            # Write the example to the TFRecord file
            writer.write(example.SerializeToString())

    # Write partition to Parquet
    file_name_parquet = f"{partition_label}_partition_{partition_id}.parquet"
    output_file_path_parquet = os.path.join(output_path, file_name_parquet)
    partition.to_parquet(output_file_path_parquet)
