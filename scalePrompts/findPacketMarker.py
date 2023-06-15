def find_start_of_packet_marker(datastream_buffer):
    index = 0
    window = []

    for char in datastream_buffer:
        window.append(char)
        if len(window) > 4:
            window.pop(0)

        if len(set(window)) == 4:
            break
        else:
            index += 1

    return index + 1
