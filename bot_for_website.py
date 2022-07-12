import telebot
from telebot import types

import time
from time import sleep

import mysql.connector
from mysql.connector import connect,Error

last = 0
now = 0


def create_connection(host_name, user_name, user_password,db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name,
        )
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection



def get_info():
    select = "SHOW DATABASES"
    with connection.cursor() as cursor:
        cursor.execute(select)
        result = cursor.fetchall()
        for row in result:
            print(row)


def check_users():
    select_movies_query = "SELECT * FROM users"
    with connection.cursor() as cursor:
        cursor.execute(select_movies_query)
        result = cursor.fetchall()
        print("")
        text = ""
        now = len(result)
        i = 0
        global last
        i = last
        while i<now:
            text += "Телефон: "+result[i][1]+"\n" + "Имя: " + result[i][2] + "\n"+"Почтовый адрес: " + result[i][3]+"\n"
            i+=1
            text+="\n"
        last = now
        return text

connection = create_connection("localhost", "root", "root","students")




bot = telebot.TeleBot("5553806153:AAHRQNFLcS7qh0YsbrAi19H7RQ_u7RwNgQg")

kol = 0

@bot.message_handler(commands=['start'])
def start(message):

     while True:

         text_message = check_users()
         if len(text_message)!=0:
            tex_to = ""
            global kol
            if kol!=0:
                tex_to = " ❗Новая заявка от ученика: ❗\n\n"
                tex_to +=text_message
            else:
                tex_to = "✅ Список учеников ✅\n\n"
                tex_to+= text_message
            kol+=1

            bot.send_message(message.chat.id,tex_to)

         sleep(5*60)



 # @bot.message_handler(content_types=['text'])
 # def func(message):
 #     if (message.text == "Просмотр учителей"):
 #         bot.send_message(message.chat.id, text="Здесь будут репетиторы которые ищут учеников")
 #     elif (message.text == "Ученики, оставившие заявку"):
 #         # markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
 #         # btn1 = types.KeyboardButton("Здесь будет инфа про учеников")
 #         # btn2 = types.KeyboardButton("Что я могу?")
 #         # back = types.KeyboardButton("Вернуться в главное меню")
 #         # markup.add(btn1, btn2, back)
 #         bot.send_message(message.chat.id, text="Здесь будет инфа про учеников")
 #     elif(message.text != "Ученики, оставившие заявку"):
 #            bot.send_message(message.chat.id, text="Пока")

bot.polling(none_stop=True)