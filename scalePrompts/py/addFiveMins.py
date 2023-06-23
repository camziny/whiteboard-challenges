import datetime

# Convert the string to a datetime object.
time_since_event = datetime.datetime.strptime("00:57:02.340", "%H:%M:%S.%f")

# Add 5 minutes to the datetime object.
time_since_event += datetime.timedelta(minutes=5)

# Convert the datetime object back to a string.
new_time_since_event = time_since_event.strftime("%H:%M:%S.%f")

print(new_time_since_event)
