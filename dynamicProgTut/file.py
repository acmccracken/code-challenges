import os
from os.path import isfile, join

def search(full_filepath, filename)
    print("checking: " + full_filepath)
    if filename in full_filepath:
        print("Found " + filename + " in " full_filepath)
        return
    if isfile(full_filepath):
        return
    for file in os.listdir(full_filepath)
        search(join(full_filepath, file), filename)