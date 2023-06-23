import os
import datetime


def rename_files(directory):
    files = os.listdir(directory)
    files.sort(key=lambda f: os.path.getctime(os.path.join(directory, f)))

    count = 1
    for file in files:
        new_name = "%03d" % count
        old_name = os.path.join(directory, file)
        new_name = os.path.join(directory, new_name + file.split(".")[-1])

        if os.path.exists(new_name):
            raise Exception("There are too many files in the directory.")

        os.rename(old_name, new_name)
        count += 1


if __name__ == "__main__":
    rename_files("sas")
