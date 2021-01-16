
import serial
import time
from firebase import firebase

firebase = firebase.FirebaseApplication('https://thermalmap-f60cd-default-rtdb.europe-west1.firebasedatabase.app/', None)


if __name__ == '__main__':
        ser = serial.Serial('/dev/ttyUSB0', 115200, timeout=1)
        ser.flush()
        result = {}
        l = []
        last = {}
        while True:
                if ser.in_waiting > 0:
                        line = ser.readline().decode('utf-8').rstrip()
                        data = []
                        if len(line):
                                data = line.split(":")[1].split(",")[0:64]
                                data = list(map(float, data))
                                last = result
                                result = firebase.post('/data', data)
                                if len(last)>0:
                                        firebase.delete('/data/', last['name'])
                                print(result['name'])
                        print(data)
                        time.sleep(1)



