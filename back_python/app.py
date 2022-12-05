from flask import Flask, request
from flaskext.mysql import MySQL
from flask_cors import CORS
from datetime import date


app = Flask(__name__)
CORS(app)

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'SocialMediaTera'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Quesedane@1337'
app.config['MYSQL_DATABASE_DB'] = 'db_groups'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

conn = mysql.connect()
cursor = conn.cursor()


#CREATE

@app.route("/create-group", methods=["GET", "POST"])
def formGroups():
    body = request.json
    created_at = date.today()
    sqlInsert = '''
        INSERT INTO user_group 
        (
            group_name, description, founder, created_at, category, sub_category, privacy
        )
        VALUES
        (
            %s, %s, %s, %s, %s, %s, %s 
        )
    '''

    cursor.execute(sqlInsert, (body['group_name'], body['description'], body['founder'], created_at, body['category'], body['sub_category'], body['privacy']))
    conn.commit()

    return {}, 200




# #READ
# sqlRead = 'SELECT * from user_group'
# cursor.execute(sqlRead)
# data = cursor.fetchall()
# print(data)

#UPDATE
# id = 1
# founder = "Julia"
# sqlUpdate = f'UPDATE user_group SET founder = "{nome}" WHERE id = {id} LIMIT 1'
# cursor.execute(sqlUpdate)
# conn.commit()

#DELETE
# id = 2
# sqlDelete = f'DELETE FROM user_group WHERE id = {id}'
# cursor.execute(sqlDelete)
# conn.commit()

if __name__ == "__main__":
    app.run(debug=True)