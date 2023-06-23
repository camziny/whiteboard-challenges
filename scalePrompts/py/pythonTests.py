import unittest

from pyspark.sql import DataFrame


class HiveHandlerTest(unittest.TestCase):
    def test_init_with_valid_args(self):
        handler = HiveHandler(
            cluster_name="my-cluster",
            domain="my-domain",
            env="dev",
            layer="core",
            zone="us-west1",
            spark_session=SparkSession.builder.appName("test").getOrCreate(),
        )

        self.assertEqual(handler.cluster_name, "my-cluster")
        self.assertEqual(handler.domain, "my-domain")
        self.assertEqual(handler.env, "dev")
        self.assertEqual(handler.layer, "core")
        self.assertEqual(handler.zone, "us-west1")

    def test_init_with_invalid_args(self):
        with self.assertRaises(ValueError):
            HiveHandler(
                cluster_name="my-cluster",
                domain="my-domain",
                env="dev",
                layer="core",
                zone="us-west1",
                spark_session=SparkSession.builder.appName("test"),
                sub_domain="my-sub-domain",
            )

    def test_create_hive_database(self):
        handler = HiveHandler(
            cluster_name="my-cluster",
            domain="my-domain",
            env="dev",
            layer="core",
            zone="us-west1",
            spark_session=SparkSession.builder.appName("test").getOrCreate(),
        )

        handler.create_hive_database()

        self.assertEqual(
            handler.spark_session.sql("show databases").first()[0], "my-domain"
        )

    def test_write_to_hive(self):
        handler = HiveHandler(
            cluster_name="my-cluster",
            domain="my-domain",
            env="dev",
            layer="core",
            zone="us-west1",
            spark_session=SparkSession.builder.appName("test").getOrCreate(),
        )

        df = DataFrame([("a", 1), ("b", 2)], ("col1", "col2"))

        handler.write_to_hive(df, "my-table")

        self.assertEqual(
            handler.spark_session.sql("show tables").first()[0], "my-table"
        )

        self.assertEqual(
            handler.spark_session.sql("select * from my-table").first(),
            ("a", 1),
        )


if __name__ == "__main__":
    unittest.main()
