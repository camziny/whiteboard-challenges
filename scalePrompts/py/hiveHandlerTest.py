import unittest
from hive_handler import HiveHandler


class HiveHandlerTest(unittest.TestCase):
    def test_init_with_valid_args(self):
        hive_handler = HiveHandler(
            cluster_name="my-cluster",
            domain="my-domain",
            env="dev",
            layer="core",
            zone="us-east1",
            spark_session=None,
            sub_domain=None,
        )
        self.assertEqual(hive_handler.cluster_name, "my-cluster")
        self.assertEqual(hive_handler.domain, "my-domain")
        self.assertEqual(hive_handler.env, "dev")
        self.assertEqual(hive_handler.layer, "core")
        self.assertEqual(hive_handler.zone, "us-east1")
        self.assertIsNone(hive_handler.sub_domain)

    def test_init_with_invalid_args(self):
        with self.assertRaises(ValueError):
            HiveHandler(
                cluster_name="my-cluster",
                domain="invalid-domain",
                env="dev",
                layer="core",
                zone="us-east1",
                spark_session=None,
                sub_domain=None,
            )

    def test_create_hive_database(self):
        hive_handler = HiveHandler(
            cluster_name="my-cluster",
            domain="my-domain",
            env="dev",
            layer="core",
            zone="us-east1",
            spark_session=None,
            sub_domain=None,
        )
        hive_handler.create_hive_database()
        expected_sql = f"CREATE DATABASE IF NOT EXISTS {hive_handler.domain}"
        self.assertEqual(hive_handler.spark_session.sql(expected_sql), None)

    def test_write_to_hive_with_valid_args(self):
        hive_handler = HiveHandler(
            cluster_name="my-cluster",
            domain="my-domain",
            env="dev",
            layer="core",
            zone="us-east1",
            spark_session=None,
            sub_domain=None,
        )
        df = spark.createDataFrame([("a", 1), ("b", 2)])
        hive_handler.write_to_hive(df, "my_table", "append")
        expected_sql = f"INSERT INTO {hive_handler.domain}.my_table (a, b) VALUES ('a', 1), ('b', 2)"
        self.assertEqual(hive_handler.spark_session.sql(expected_sql), None)

    def test_write_to_hive_with_invalid_args(self):
        hive_handler = HiveHandler(
            cluster_name="my-cluster",
            domain="my-domain",
            env="dev",
            layer="core",
            zone="us-east1",
            spark_session=None,
            sub_domain=None,
        )
        df = spark.createDataFrame([("a", 1), ("b", 2)])
        with self.assertRaises(AnalysisException):
            hive_handler.write_to_hive(df, "my_table", "invalid_mode")
