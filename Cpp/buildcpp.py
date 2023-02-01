from os import listdir, system

for files in listdir("./"):
    if (files.split(".")[-1] == "cpp"):
        filename = ".".join(files.split(".")[:-1])
        extension = ".out"
        try:
            system(f"g++ -std=c++20 {files} -o {filename+extension}")
            print(f"# CREATED {filename+extension}")

        except Exception as e:
            print(e)
            exit()
