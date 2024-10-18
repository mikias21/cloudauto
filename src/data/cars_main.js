const cars = [
    {
        "id": "9936d31a-3d61-489f-8980-02a48f30e34c",
        "link": "/market/1006443-info",
        "image_url": "https://pic.carmucn.com/202410/66dc77d70a7685aa9a5fc7021bf04ac0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Avatr 07",
        "price": "EXW $3*,660",
        "description": "2024 Ultra увеличенная версия Полный привод"
    },
    {
        "id": "60d6d62b-f8cb-4936-a52d-b4629df99d80",
        "link": "/market/1006261-info",
        "image_url": "https://pic1.chehang168.com/202409/9f44387db1e4cb3ef65af9607e9dcd6f.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Z10",
        "price": "EXW $4*,167",
        "description": "2024 модель 95kWh 702 км Полный привод Умный драйв Ultra"
    },
    {
        "id": "6c394229-ce0a-43c9-9519-bcdc837b828c",
        "link": "/market/1006260-info",
        "image_url": "https://pic1.chehang168.com/202207/ea37bbf40cc811eda25e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Воротник 01",
        "price": "EXW $2*,410",
        "description": "01 2024 модели 2.0TD Полный привод Halo"
    },
    {
        "id": "cca96593-e1c0-4806-a14f-4584c45cee3a",
        "link": "/market/1006259-info",
        "image_url": "https://pic1.chehang168.com/202207/ea37bbf40cc811eda25e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Воротник 01",
        "price": "EXW $1*,693",
        "description": "01 2024 модели 2.0TD 2WD Global Edition"
    },
    {
        "id": "f8fe487e-fb9f-41d5-92c7-67f887b660f6",
        "link": "/market/1006258-info",
        "image_url": "https://pic1.chehang168.com/202409/4ce373f6c91e7e716b3ea9aaeb2fa015.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO 06",
        "price": "EXW $1*,058",
        "description": "2023 модели Remix 1.5T Яо Halo"
    },
    {
        "id": "8cea206a-ece4-4701-b2b9-454e1afd757e",
        "link": "/market/1006257-info",
        "image_url": "https://pic1.chehang168.com/202406/f15c7c397f49cdc5a7d52273d784e81c.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Buick Анкави",
        "price": "EXW $2*,450",
        "description": "Envision 2024 модели Envision Plus 28T Полный привод эксклюзивная версия"
    },
    {
        "id": "0ebba4ee-4da9-4269-8230-fe23dfe21686",
        "link": "/market/1006256-info",
        "image_url": "https://pic1.chehang168.com/202409/4ce373f6c91e7e716b3ea9aaeb2fa015.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO 06",
        "price": "EXW $1*,255",
        "description": "2023 Remix 1.5T Pro"
    },
    {
        "id": "d607f1ae-61d6-4ae5-b003-5c1f21489430",
        "link": "/market/1006255-info",
        "image_url": "https://pic1.chehang168.com/202111/c58fa0684b5e11ec9d7900163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz Benz EQB",
        "price": "EXW $2*,400",
        "description": "2025 EQB 260"
    },
    {
        "id": "14e2f5b8-0bf9-4c11-be31-4a8232037b08",
        "link": "/market/1006254-info",
        "image_url": "https://pic1.chehang168.com/202210/3cdfef7c537611ed9c4b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Рок 03",
        "price": "EXW $1*,832",
        "description": "03 2025 2.0TD DCT Чемпион Pro"
    },
    {
        "id": "6311c0d7-54d4-4245-a2f2-304c1e184f70",
        "link": "/market/1006253-info",
        "image_url": "https://pic1.chehang168.com/202210/3cdfef7c537611ed9c4b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Рок 03",
        "price": "EXW $1*,473",
        "description": "03 2025 1.5TD DCT Чемпион Pro"
    },
    {
        "id": "00937801-91b8-4f44-9b87-bb82a85abdf8",
        "link": "/market/1006252-info",
        "image_url": "https://pic1.chehang168.com/202307/ae9eb5f025e711eea98700163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz EQE SUV",
        "price": "EXW $5*,250",
        "description": "2024 модели 500 4MATIC Deluxe Edition"
    },
    {
        "id": "f36df6f9-92dd-4397-b32c-76b676dbacc1",
        "link": "/market/1006251-info",
        "image_url": "https://pic1.chehang168.com/202307/ae9eb5f025e711eea98700163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz EQE SUV",
        "price": "EXW $4*,200",
        "description": "2024 модели 350 4MATIC Pioneer Edition"
    },
    {
        "id": "3870d785-677a-49ea-8761-9656e8c286b7",
        "link": "/market/1006253-info",
        "image_url": "https://pic1.chehang168.com/202210/3cdfef7c537611ed9c4b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Рок 03",
        "price": "EXW $1*,473",
        "description": "03 2025 1.5TD DCT Чемпион Pro"
    },
    {
        "id": "95aa9356-1d7d-4fba-a1c5-b127f94b9aba",
        "link": "/market/1006252-info",
        "image_url": "https://pic1.chehang168.com/202307/ae9eb5f025e711eea98700163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz EQE SUV",
        "price": "EXW $5*,250",
        "description": "2024 модели 500 4MATIC Deluxe Edition"
    },
    {
        "id": "3a5f647b-11f3-46a9-a3b8-46254c41ea57",
        "link": "/market/1006251-info",
        "image_url": "https://pic1.chehang168.com/202307/ae9eb5f025e711eea98700163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz EQE SUV",
        "price": "EXW $4*,200",
        "description": "2024 модели 350 4MATIC Pioneer Edition"
    },
    {
        "id": "bbb6ca4e-81bd-473b-99b9-c78119053fa9",
        "link": "/market/1006250-info",
        "image_url": "https://pic1.chehang168.com/202403/4eaf1321ca6203a13d8a565ee4510248.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PRO",
        "price": "EXW $1*,320",
        "description": "2024 1.6T DCT Deluxe Edition 7-местный"
    },
    {
        "id": "b7156d72-d432-4085-9184-b984f23ca80e",
        "link": "/market/1006249-info",
        "image_url": "https://pic1.chehang168.com/202403/4eaf1321ca6203a13d8a565ee4510248.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PRO",
        "price": "EXW $1*,903",
        "description": "2024 1.6T DCT Deluxe Edition 5-местный"
    },
    {
        "id": "61eac465-a867-439a-8509-e1cb64109a02",
        "link": "/market/1006248-info",
        "image_url": "https://pic1.chehang168.com/202403/4eaf1321ca6203a13d8a565ee4510248.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PRO",
        "price": "EXW $1*,655",
        "description": "2024 1.6T DCT элитная версия 5-местный"
    },
    {
        "id": "36b022b2-7382-4669-ae3c-7451bd1e4639",
        "link": "/market/1006247-info",
        "image_url": "https://pic1.chehang168.com/202211/97f1fa485f3511edb5f400163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PLUS",
        "price": "EXW $1*,713",
        "description": "2024 модели 1.6TD Ручной бунгало PRO 5 мест"
    },
    {
        "id": "564edbcb-2527-4d82-bbb4-dcb369370c3d",
        "link": "/market/1006246-info",
        "image_url": "https://pic1.chehang168.com/202211/97f1fa485f3511edb5f400163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PLUS",
        "price": "EXW $1*,019",
        "description": "2024 модели 1,5 T Ручной бунгало 5"
    },
    {
        "id": "eeb88620-b060-430d-af6c-0d2ff434cbeb",
        "link": "/market/1006245-info",
        "image_url": "https://pic1.chehang168.com/202409/04bea2c12f5fb60cc3a73c201638b9cf.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour Dashing",
        "price": "EXW $1*,158",
        "description": "2024 1.5T DCT Dragon Edition PRO"
    },
    {
        "id": "7349ea21-1631-4f76-b3b7-c3329f556fad",
        "link": "/market/1006244-info",
        "image_url": "https://pic1.chehang168.com/202409/04bea2c12f5fb60cc3a73c201638b9cf.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour Dashing",
        "price": "EXW $1*,216",
        "description": "2024 модели 1.5T DCT Star Yao PRO"
    },
    {
        "id": "6398193a-c383-4fa6-9d55-15e938a7722a",
        "link": "/market/1006243-info",
        "image_url": "https://pic1.chehang168.com/202209/d1b6c006341011eda59300163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour Dashing i-DM",
        "price": "EXW $2*,343",
        "description": "Dasheng i-DM 2023 1.5T DHT Lightning 02"
    },
    {
        "id": "93751522-fae8-47cd-85d4-da732d538096",
        "link": "/market/1006242-info",
        "image_url": "https://pic1.chehang168.com/202209/d1b6c006341011eda59300163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour Dashing i-DM",
        "price": "EXW $2*,955",
        "description": "Dasheng i-DM 2023 1.5T DHT Lightning 01"
    },
    {
        "id": "38822ad9-58d4-461e-86bf-dcaba2577264",
        "link": "/market/1006241-info",
        "image_url": "https://pic1.chehang168.com/202311/319ddbf0846d11eebb5b00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море L9",
        "price": "EXW $2*,256",
        "description": "Mountain L9 2024 1.5TD 2DHT Max 5-местный"
    },
    {
        "id": "b337d717-7134-4c5c-b29c-52310e57a415",
        "link": "/market/1006240-info",
        "image_url": "https://pic1.chehang168.com/202311/319ddbf0846d11eebb5b00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море L9",
        "price": "EXW $2*,007",
        "description": "Mountain L9 2024 1.5TD 2DHT Pro 5-местный"
    },
    {
        "id": "b4c6908b-5664-4c2d-9eec-05cbd0d5afd6",
        "link": "/market/1006239-info",
        "image_url": "https://pic1.chehang168.com/202311/319ddbf0846d11eebb5b00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море L9",
        "price": "EXW $2*,204",
        "description": "Mountain L9 2024 1.5TD 2DHT Air Light 5-местный"
    },
    {
        "id": "b0b59dcc-d572-4d5a-b70e-efc6950a7838",
        "link": "/market/1006238-info",
        "image_url": "https://pic1.chehang168.com/202404/057ebf695fbf6bd50d775055e65b9d24.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море T2",
        "price": "EXW $2*,088",
        "description": "Shanhai T2 2024 C-DM 129KM Linye Edition"
    },
    {
        "id": "5a55ca04-314f-447d-abbf-f3e0fd9ac160",
        "link": "/market/1006237-info",
        "image_url": "https://pic1.chehang168.com/202404/057ebf695fbf6bd50d775055e65b9d24.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море T2",
        "price": "EXW $2*,701",
        "description": "Mountain T2 2024 C-DM 129KM Wild Edition"
    },
    {
        "id": "559caf18-463a-46af-bae9-e5bf315e0a22",
        "link": "/market/1006236-info",
        "image_url": "https://pic1.chehang168.com/202310/5c33dad468ea11ee8b1000163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour путешественники",
        "price": "EXW $2*,950",
        "description": "Traveler 2024 модели 2.0T Полный привод Helano PRO"
    },
    {
        "id": "ad8a3fde-2357-4c0a-bd31-8914aa990b11",
        "link": "/market/1006235-info",
        "image_url": "https://pic1.chehang168.com/202308/d319915a416411ee826400163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Полюсный камень 01",
        "price": "EXW $3*,019",
        "description": "Polestones 01 2024 универсальный 7-местный Стандартный срок службы батареи"
    },
    {
        "id": "186e642a-65c9-478d-a754-6e14aa5ddad0",
        "link": "/market/1006234-info",
        "image_url": "https://pic1.chehang168.com/202403/59a126a9f546bc722071e58fb924b7e1.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Geely Binrui",
        "price": "EXW $1*,231",
        "description": "2024  COOL 1.5T DCT Champion Edition"
    },
    {
        "id": "d39b720e-14f6-4784-9898-8eb323cedc9a",
        "link": "/market/1006233-info",
        "image_url": "https://pic1.chehang168.com/202210/35104dfe56ab11eda1c100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Geely Altas L",
        "price": "EXW $1*,933",
        "description": "2024 1.5TD DCT Ultimate"
    },
    {
        "id": "5dfa5c09-066b-4e57-a3ba-f6c9f91b75f3",
        "link": "/market/1006232-info",
        "image_url": "https://pic1.chehang168.com/202407/68c87c70688a41733750d3a3e7b1b237.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Geely Emgrand",
        "price": "EXW $1*,383",
        "description": "2025 1,5 л 4-го поколения CVT Dragon Edition"
    },
    {
        "id": "ef8284c9-5fa4-477e-af3c-aa27760afed6",
        "link": "/market/1006231-info",
        "image_url": "https://pic1.chehang168.com/202401/603e99f8b4f211eeb61800163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Zeekr X",
        "price": "EXW $2*,246",
        "description": "2024 четырехместный задний привод"
    },
    {
        "id": "a955f3df-7c2e-488b-9f2f-b8537fd8c2d3",
        "link": "/market/1006230-info",
        "image_url": "https://pic1.chehang168.com/202312/2999a82aa52f11eeb10200163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Zeekr Полюс 007",
        "price": "EXW $3*,021",
        "description": "007 2025 лет с длинным задним драйвером с умным приводом 100kWh"
    },
    {
        "id": "cec2a327-50f5-4fb2-81c0-669be3974fb4",
        "link": "/market/1006229-info",
        "image_url": "https://pic1.chehang168.com/202211/2313439c5b4a11ed9c4500163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Zeekr 009",
        "price": "EXW $6*,261",
        "description": "2024 семиместных проходов Полный привод 140kWh"
    },
    {
        "id": "ad98d0b8-5966-4511-bd11-6c1de763e0c7",
        "link": "/market/1006228-info",
        "image_url": "https://pic1.chehang168.com/202409/88af77d67ac06367b4739c9dd2eca7b9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz V класс",
        "price": "EXW $7*,400",
        "description": "V-Class 2022 V 260 L Длинная колесная база Уважаемые издания"
    },
    {
        "id": "5c6e7597-5986-4464-8372-aac8c07ade35",
        "link": "/market/1006227-info",
        "image_url": "https://pic1.chehang168.com/202405/3e85dd9514e665356ac401d1d9767190.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Equinox Plus",
        "price": "EXW $2*,791",
        "description": "2024 модели 102km RS Ultimate"
    },
    {
        "id": "9eb43659-6f60-4e91-9595-8876d8f6bc90",
        "link": "/market/1006112-info",
        "image_url": "https://pic.carmucn.com/202409/e8fdae2ebddf1b5825e770054b418d40.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Infiniti QX50",
        "price": "EXW $3*,690",
        "description": "2024 2.0T 2WD пилотная версия"
    },
    {
        "id": "b98e1014-8708-44d4-99f1-0f143d053928",
        "link": "/market/1006105-info",
        "image_url": "https://pic.carmucn.com/202409/76fd65ed033e76eb4a4eb395c5723ca5.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tiguan L",
        "price": "EXW $3*,384",
        "description": "2024 PRO 380TSI Полный привод R-Line Zhizun Edition"
    },
    {
        "id": "6979deb2-0627-49df-bf4b-412f681f03b7",
        "link": "/market/1006113-info",
        "image_url": "https://pic.carmucn.com/202409/2a886a39fdc3ee408de23800776db7ca.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "GAC M8",
        "price": "EXW $2*,225",
        "description": "2024 ведущих шоу серии 390T Deluxe Edition"
    },
    {
        "id": "68f97ea9-e636-4953-8e8b-ce6180dbd9cf",
        "link": "/market/1006127-info",
        "image_url": "https://pic1.chehang168.com/202208/48aacde4116e11ed8bf100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $2*,526",
        "description": "2024 дополнительных 1060 эксклюзивная версия"
    },
    {
        "id": "1ad3e428-655b-4d40-8e68-c460440d67e2",
        "link": "/market/1006129-info",
        "image_url": "https://pic1.chehang168.com/202404/368643acab918e815e2b15154b175451.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,865",
        "description": "Nhe L 2024 увеличенная 220 флэш-версия"
    },
    {
        "id": "af3d31e3-160e-482c-9b2f-a6144d1ea624",
        "link": "/market/1006131-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,951",
        "description": "2024 1.5T CVT Deluxe Edition"
    },
    {
        "id": "ec9d5660-5186-41c9-87ae-978b841569ca",
        "link": "/market/1006134-info",
        "image_url": "https://pic1.chehang168.com/202410/7bd612e7b2d032516eaa43a9c7fa4e55.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,588",
        "description": "2024 Glory Edition 230TCI Auto Excellence 7 seat"
    },
    {
        "id": "8806bb69-62ca-441f-841c-57d17decc69e",
        "link": "/market/1006138-info",
        "image_url": "https://pic1.chehang168.com/202209/27ffd6f440a611ed8e7e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,392",
        "description": "2024 модели 1.6T DCT мудрости"
    },
    {
        "id": "1b78843b-8efe-49ab-bebf-bac80fa0f52c",
        "link": "/market/1006140-info",
        "image_url": "https://pic1.chehang168.com/202405/45e7a3d99f465a745a992d8dc9c369b2.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PRO",
        "price": "FOB $1*,022",
        "description": "2024 Champion Edition 290T 2WD Highlight 7 seats"
    },
    {
        "id": "53c1ed26-67b6-4772-9605-573cc873f023",
        "link": "/market/1006127-info",
        "image_url": "https://pic1.chehang168.com/202208/48aacde4116e11ed8bf100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $2*,526",
        "description": "2024 дополнительных 1060 эксклюзивная версия"
    },
    {
        "id": "94631d31-13b8-4371-b002-98f12fc37c12",
        "link": "/market/1006112-info",
        "image_url": "https://pic.carmucn.com/202409/e8fdae2ebddf1b5825e770054b418d40.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Infiniti QX50",
        "price": "EXW $3*,690",
        "description": "2024 2.0T 2WD пилотная версия"
    },
    {
        "id": "20c648b2-678c-41a2-b26c-2d7f47f03bc3",
        "link": "/market/1006105-info",
        "image_url": "https://pic.carmucn.com/202409/76fd65ed033e76eb4a4eb395c5723ca5.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tiguan L",
        "price": "EXW $3*,384",
        "description": "2024 PRO 380TSI Полный привод R-Line Zhizun Edition"
    },
    {
        "id": "d1c87fc7-c9f3-471a-bef6-fbcdcdd86266",
        "link": "/market/1006113-info",
        "image_url": "https://pic.carmucn.com/202409/2a886a39fdc3ee408de23800776db7ca.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "GAC M8",
        "price": "EXW $2*,225",
        "description": "2024 ведущих шоу серии 390T Deluxe Edition"
    },
    {
        "id": "c71b81a1-c07c-45d2-add6-962968b8dade",
        "link": "/market/1006122-info",
        "image_url": "https://pic.carmucn.com/202409/dce2aee770b0d824b9fa038b73ed72ed.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Infiniti QX60",
        "price": "EXW $3*,813",
        "description": "2024 2.0T Элегантная версия"
    },
    {
        "id": "c8ea826e-d49f-48a9-a613-ec9cd20af042",
        "link": "/market/1006130-info",
        "image_url": "https://pic1.chehang168.com/202404/368643acab918e815e2b15154b175451.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,391",
        "description": "2024 с увеличением 310 флэш-заряда PRO Edition"
    },
    {
        "id": "9f8124a5-5a74-46f7-810e-58db43dd14a6",
        "link": "/market/1006132-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,923",
        "description": "2024 1.5T CVT Уважаемые издания"
    },
    {
        "id": "f49c4cd3-b0d8-427f-9b8d-081bd2b807c4",
        "link": "/market/1006134-info",
        "image_url": "https://pic1.chehang168.com/202410/7bd612e7b2d032516eaa43a9c7fa4e55.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,588",
        "description": "2024 Glory Edition 230TCI Auto Excellence 7 seat"
    },
    {
        "id": "1ad1ad85-67c9-4140-a638-005f62904fc8",
        "link": "/market/1006136-info",
        "image_url": "https://pic1.chehang168.com/202409/c1e68ee093553eaa22c022cf7dc2e71d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "EXW $2*,249",
        "description": "2023 2.0T двойное сцепление с двойным приводом Deluxe Edition 5 мест"
    },
    {
        "id": "b3147dbc-4d25-4c7f-a958-680fcdc2ec39",
        "link": "/market/1006113-info",
        "image_url": "https://pic.carmucn.com/202409/2a886a39fdc3ee408de23800776db7ca.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "GAC M8",
        "price": "EXW $2*,225",
        "description": "2024 ведущих шоу серии 390T Deluxe Edition"
    },
    {
        "id": "de0e9be8-8c49-40cf-9597-4c9d695935e6",
        "link": "/market/1006105-info",
        "image_url": "https://pic.carmucn.com/202409/76fd65ed033e76eb4a4eb395c5723ca5.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tiguan L",
        "price": "EXW $3*,384",
        "description": "2024 PRO 380TSI Полный привод R-Line Zhizun Edition"
    },
    {
        "id": "56b94d1f-f103-4316-9d5a-2d3dd00b96cc",
        "link": "/market/1006112-info",
        "image_url": "https://pic.carmucn.com/202409/e8fdae2ebddf1b5825e770054b418d40.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Infiniti QX50",
        "price": "EXW $3*,690",
        "description": "2024 2.0T 2WD пилотная версия"
    },
    {
        "id": "376af4f0-0d3d-4aed-a3bb-bd2ca3e2bd33",
        "link": "/market/1006122-info",
        "image_url": "https://pic.carmucn.com/202409/dce2aee770b0d824b9fa038b73ed72ed.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Infiniti QX60",
        "price": "EXW $3*,813",
        "description": "2024 2.0T Элегантная версия"
    },
    {
        "id": "6b7bc38b-a585-4682-817f-2fb2621fb24e",
        "link": "/market/1006128-info",
        "image_url": "https://pic1.chehang168.com/202208/48aacde4116e11ed8bf100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $2*,789",
        "description": "2024 увеличенная версия 1060"
    },
    {
        "id": "c02e15c4-4c85-406a-8592-7b2a5276ab82",
        "link": "/market/1006130-info",
        "image_url": "https://pic1.chehang168.com/202404/368643acab918e815e2b15154b175451.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,391",
        "description": "2024 с увеличением 310 флэш-заряда PRO Edition"
    },
    {
        "id": "f54b12f2-7fe7-4893-9151-9ecba010bc99",
        "link": "/market/1006132-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,923",
        "description": "2024 1.5T CVT Уважаемые издания"
    },
    {
        "id": "83f4a196-f6b8-48e0-96d1-a11af94cbabb",
        "link": "/market/1006134-info",
        "image_url": "https://pic1.chehang168.com/202410/7bd612e7b2d032516eaa43a9c7fa4e55.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,588",
        "description": "2024 Glory Edition 230TCI Auto Excellence 7 seat"
    },
    {
        "id": "83ec0d10-09e1-4ec0-93e2-3333a273ceca",
        "link": "/market/1006135-info",
        "image_url": "https://pic1.chehang168.com/202409/c1e68ee093553eaa22c022cf7dc2e71d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "EXW $2*,915",
        "description": "2024 модели 2.0T с двойным сцепления 2WD супер удобная версия"
    },
    {
        "id": "1153aed8-9429-455d-a641-35584251e202",
        "link": "/market/1006105-info",
        "image_url": "https://pic.carmucn.com/202409/76fd65ed033e76eb4a4eb395c5723ca5.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tiguan L",
        "price": "EXW $3*,384",
        "description": "2024 PRO 380TSI Полный привод R-Line Zhizun Edition"
    },
    {
        "id": "46a7466a-ffa0-4d58-b3fc-5e71a3843e9c",
        "link": "/market/1005648-info",
        "image_url": "https://pic.carmucn.com/202408/a66d6630158df4bcf3da19b676fe63e8.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Avatr 12",
        "price": "EXW $4*,629",
        "description": "2024 модели 650 три Лазер Полный привод GT Edition"
    },
    {
        "id": "b41cb09b-d90c-48b8-ba6a-e5b97e92f23b",
        "link": "/market/1006122-info",
        "image_url": "https://pic.carmucn.com/202409/dce2aee770b0d824b9fa038b73ed72ed.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Infiniti QX60",
        "price": "EXW $3*,813",
        "description": "2024 2.0T Элегантная версия"
    },
    {
        "id": "5a664e26-7d42-45a8-bccf-ef34fdecea7a",
        "link": "/market/1006128-info",
        "image_url": "https://pic1.chehang168.com/202208/48aacde4116e11ed8bf100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $2*,789",
        "description": "2024 увеличенная версия 1060"
    },
    {
        "id": "96c07489-47f3-4d1d-89d3-707efaaf1f42",
        "link": "/market/1006130-info",
        "image_url": "https://pic1.chehang168.com/202404/368643acab918e815e2b15154b175451.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,391",
        "description": "2024 с увеличением 310 флэш-заряда PRO Edition"
    },
    {
        "id": "7b049f0c-4cb3-405f-be5b-789594fd9455",
        "link": "/market/1006132-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,923",
        "description": "2024 1.5T CVT Уважаемые издания"
    },
    {
        "id": "8e413f6a-9421-477e-aeca-ebd5fdf82583",
        "link": "/market/1006134-info",
        "image_url": "https://pic1.chehang168.com/202410/7bd612e7b2d032516eaa43a9c7fa4e55.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,588",
        "description": "2024 Glory Edition 230TCI Auto Excellence 7 seat"
    },
    {
        "id": "c34c7c1d-6253-4ec0-b055-c1851e4301ad",
        "link": "/market/1006136-info",
        "image_url": "https://pic1.chehang168.com/202409/c1e68ee093553eaa22c022cf7dc2e71d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "EXW $2*,249",
        "description": "2023 2.0T двойное сцепление с двойным приводом Deluxe Edition 5 мест"
    },
    {
        "id": "b3bfacf6-353f-48a3-9a2d-319007f2f1c2",
        "link": "/market/1006138-info",
        "image_url": "https://pic1.chehang168.com/202209/27ffd6f440a611ed8e7e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,392",
        "description": "2024 модели 1.6T DCT мудрости"
    },
    {
        "id": "c556932d-cbc5-40b7-a532-4405b772fc29",
        "link": "/market/1005648-info",
        "image_url": "https://pic.carmucn.com/202408/a66d6630158df4bcf3da19b676fe63e8.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Avatr 12",
        "price": "EXW $4*,629",
        "description": "2024 модели 650 три Лазер Полный привод GT Edition"
    },
    {
        "id": "c1db09be-0f8b-4138-baf8-db833793706c",
        "link": "/market/1006127-info",
        "image_url": "https://pic1.chehang168.com/202208/48aacde4116e11ed8bf100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $2*,526",
        "description": "2024 дополнительных 1060 эксклюзивная версия"
    },
    {
        "id": "c5f1e708-5f94-4400-bb0a-f51f197cc6d4",
        "link": "/market/1006129-info",
        "image_url": "https://pic1.chehang168.com/202404/368643acab918e815e2b15154b175451.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,865",
        "description": "Nhe L 2024 увеличенная 220 флэш-версия"
    },
    {
        "id": "599be9ce-e002-43f2-9a43-673386091110",
        "link": "/market/1006131-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,951",
        "description": "2024 1.5T CVT Deluxe Edition"
    },
    {
        "id": "c8ebf588-b081-4025-90d7-4dd54ef5e4c5",
        "link": "/market/1006133-info",
        "image_url": "https://pic1.chehang168.com/202410/7bd612e7b2d032516eaa43a9c7fa4e55.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,200",
        "description": "2024 Glory Edition 230TCI Manual Advance 7 seat"
    },
    {
        "id": "653de4a2-a736-4667-a219-2563aeab9b60",
        "link": "/market/1006135-info",
        "image_url": "https://pic1.chehang168.com/202409/c1e68ee093553eaa22c022cf7dc2e71d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "EXW $2*,915",
        "description": "2024 модели 2.0T с двойным сцепления 2WD супер удобная версия"
    },
    {
        "id": "4e230ac9-c44d-4482-b895-2d0cacbe504f",
        "link": "/market/1006137-info",
        "image_url": "https://pic1.chehang168.com/202310/4b6f11cc724111eea2d100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 5",
        "price": "EXW $7,*04",
        "description": "2024 1.5L MT Urban"
    },
    {
        "id": "ae746637-1b6a-42ca-96bc-87bcf9da7d92",
        "link": "/market/1006139-info",
        "image_url": "https://pic1.chehang168.com/202209/27ffd6f440a611ed8e7e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,225",
        "description": "2024 модели 1.6T DCT"
    },
    {
        "id": "251f2fe0-3677-44f2-8a59-fe25e34e23bb",
        "link": "/market/1006141-info",
        "image_url": "https://pic1.chehang168.com/202405/45e7a3d99f465a745a992d8dc9c369b2.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PRO",
        "price": "EXW $1*,253",
        "description": "2024 Champion Edition 290T 2WD Highlight 5 seats"
    },
    {
        "id": "07412f04-362b-45c2-9717-a2f62e7106e7",
        "link": "/market/1006130-info",
        "image_url": "https://pic1.chehang168.com/202404/368643acab918e815e2b15154b175451.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,391",
        "description": "2024 с увеличением 310 флэш-заряда PRO Edition"
    },
    {
        "id": "f5685949-c2b6-4157-af5e-7cefb3330836",
        "link": "/market/1006132-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,923",
        "description": "2024 1.5T CVT Уважаемые издания"
    },
    {
        "id": "ef3b8cf8-5c5d-44ae-a426-e82e0d9a8b1f",
        "link": "/market/1006134-info",
        "image_url": "https://pic1.chehang168.com/202410/7bd612e7b2d032516eaa43a9c7fa4e55.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,588",
        "description": "2024 Glory Edition 230TCI Auto Excellence 7 seat"
    },
    {
        "id": "34305c5c-5a38-4802-9ea1-a9cac0e995a7",
        "link": "/market/1006136-info",
        "image_url": "https://pic1.chehang168.com/202409/c1e68ee093553eaa22c022cf7dc2e71d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "EXW $2*,249",
        "description": "2023 2.0T двойное сцепление с двойным приводом Deluxe Edition 5 мест"
    },
    {
        "id": "c9dbb9dc-fa5c-4bb4-b000-351ebaf87fbb",
        "link": "/market/1006138-info",
        "image_url": "https://pic1.chehang168.com/202209/27ffd6f440a611ed8e7e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,392",
        "description": "2024 модели 1.6T DCT мудрости"
    },
    {
        "id": "f053b471-c494-44bb-af61-33eac7f6cbab",
        "link": "/market/1006140-info",
        "image_url": "https://pic1.chehang168.com/202405/45e7a3d99f465a745a992d8dc9c369b2.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PRO",
        "price": "FOB $1*,022",
        "description": "2024 Champion Edition 290T 2WD Highlight 7 seats"
    },
    {
        "id": "18085a04-2f8a-493c-83ca-01d92a556b4b",
        "link": "/market/1006142-info",
        "image_url": "https://pic.carmucn.com/202409/3fec9befb95e2adf01d2ce9a1652f3db.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota Venza",
        "price": "EXW $2*,381",
        "description": "2024 2.0L CVT 2WD Premth Edition"
    },
    {
        "id": "d4c06021-2365-427c-b4e8-43c1549b03c2",
        "link": "/market/1006144-info",
        "image_url": "https://pic1.chehang168.com/202311/3d30f28281e211eea31d00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PLUS",
        "price": "EXW $1*,225",
        "description": "Tiggo 8 Plus 2024 Champion 290TGDI DCT Premium 5 Seat"
    },
    {
        "id": "7ee06781-2fb7-491c-853f-10d108f8e400",
        "link": "/market/1006146-info",
        "image_url": "https://pic1.chehang168.com/202302/cf98febaadc811eda28e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K3",
        "price": "EXW $1*,033",
        "description": "2023 1.5L CVT Luxury"
    },
    {
        "id": "62109f46-deb4-46aa-afa5-22f3cdfbc7a0",
        "link": "/market/1006136-info",
        "image_url": "https://pic1.chehang168.com/202409/c1e68ee093553eaa22c022cf7dc2e71d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "EXW $2*,249",
        "description": "2023 2.0T двойное сцепление с двойным приводом Deluxe Edition 5 мест"
    },
    {
        "id": "a2093ffb-6703-4488-b50b-ec2c5faf8d40",
        "link": "/market/1006138-info",
        "image_url": "https://pic1.chehang168.com/202209/27ffd6f440a611ed8e7e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,392",
        "description": "2024 модели 1.6T DCT мудрости"
    },
    {
        "id": "41d7f58d-4e5e-4764-a8ec-e3fc760ac172",
        "link": "/market/1006139-info",
        "image_url": "https://pic1.chehang168.com/202209/27ffd6f440a611ed8e7e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,225",
        "description": "2024 модели 1.6T DCT"
    },
    {
        "id": "40a14bc9-92f2-4778-8691-1b5a33286477",
        "link": "/market/1006141-info",
        "image_url": "https://pic1.chehang168.com/202405/45e7a3d99f465a745a992d8dc9c369b2.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PRO",
        "price": "EXW $1*,253",
        "description": "2024 Champion Edition 290T 2WD Highlight 5 seats"
    },
    {
        "id": "9d4481af-0471-459a-94dc-2459644f4902",
        "link": "/market/1006143-info",
        "image_url": "https://pic1.chehang168.com/202311/3d30f28281e211eea31d00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PLUS",
        "price": "EXW $1*,531",
        "description": "2024 Champion Edition 290TGDI DCT Haoyue Edition 5 мест"
    },
    {
        "id": "3faffd19-7a6c-47e7-a816-271f40adbd5d",
        "link": "/market/1006145-info",
        "image_url": "https://pic1.chehang168.com/202405/46cedf42650c4c4a4eb054c3bcfa271c.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Explore 06",
        "price": "EXW $1*,588",
        "description": "2025 City Edition 1.6T 2WD Deluxe"
    },
    {
        "id": "19eb51fe-dc71-4799-ae3b-c450a263bfd2",
        "link": "/market/1006147-info",
        "image_url": "https://pic1.chehang168.com/202407/bc50778f6f8eb5311d2f5ce4cd264e57.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota Frontlander",
        "price": "EXW $1*,421",
        "description": "2024 модели 2.0L Smart Electric Mixed Dual Led Edition"
    },
    {
        "id": "114da1ec-14b1-4ecb-9251-9af7e0b68b38",
        "link": "/market/1006149-info",
        "image_url": "https://pic1.chehang168.com/202409/ad61d5836d13d7351411841af73f99d6.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K5",
        "price": "EXW $1*,615",
        "description": "2021 270T CVVD новая версия"
    },
    {
        "id": "2d78eb8b-de51-4e66-ac9b-bb104f45a9bf",
        "link": "/market/1006151-info",
        "image_url": "https://pic1.chehang168.com/202101/ceeecbc8593f11ebb38d00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Беги",
        "price": "EXW $9,*54",
        "description": "Yi Run 2021 1.4L CVT Fun Fun Edition"
    },
    {
        "id": "771d7153-5ce5-4b08-9b87-144c2f867406",
        "link": "/market/1005886-info",
        "image_url": "https://pic.carmucn.com/202409/a2880aba5427d5d1dd0dea1d9a0335c0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,345",
        "description": "2024 модели 1.6T DCT Excellence Edition"
    },
    {
        "id": "13e92ce6-57b7-4901-a6d2-db7077a78888",
        "link": "/market/1005885-info",
        "image_url": "https://pic.carmucn.com/202409/20050c8b0557b8c785ec7b8032762b89.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "FOB $2*,950",
        "description": "2024 модели, модифицированные 2.0T Автоматический 2WD супер удобная эксклюзивная версия"
    },
    {
        "id": "8c26c9db-4366-485d-85de-45578f35332b",
        "link": "/market/1005884-info",
        "image_url": "https://pic.carmucn.com/202409/d5136c099099752e178e422d1b79f701.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,330",
        "description": "2024 Glory Edition 230TCI Auto Excellence 5 seat"
    },
    {
        "id": "7b4d4e5d-4bd1-4fb7-be94-93893b737e97",
        "link": "/market/1005883-info",
        "image_url": "https://pic.carmucn.com/202409/1c9bca03b505bdff32dfc7c686d99c03.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $8,*75",
        "description": "2024 1.5T Ручной Glory Edition"
    },
    {
        "id": "7ec56344-4a62-46cc-9cb1-698d597f9af8",
        "link": "/market/1005882-info",
        "image_url": "https://pic.carmucn.com/202409/18d06b5760ceb62c221acfefbe97695f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа X",
        "price": "EXW $1*,020",
        "description": "2025 500 Plus"
    },
    {
        "id": "913b156e-29b2-40b9-9eb0-2f469c071671",
        "link": "/market/1005881-info",
        "image_url": "https://pic.carmucn.com/202409/76700958adb74be2b19eab458f67dcc9.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta GT",
        "price": "EXW $1*,835",
        "description": "2023 модели 560"
    },
    {
        "id": "44f3c15d-bf90-4d80-83b5-c4b8428b23f8",
        "link": "/market/1005880-info",
        "image_url": "https://pic.carmucn.com/202409/a58dfc2ef02122e022ec1727552c4c62.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,955",
        "description": "Nhe L 2024 увеличенная 310 флэш-версия"
    },
    {
        "id": "11f84458-dfeb-409e-a27d-5b7bd4fde885",
        "link": "/market/1005879-info",
        "image_url": "https://pic.carmucn.com/202409/6c490c0ff6fc14c22888929947fe5d2c.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $1*,860",
        "description": "2024 модели для второго увеличения 1060 Lite Edition"
    },
    {
        "id": "7c538039-8148-4809-86b5-f5368b01df46",
        "link": "/market/1005825-info",
        "image_url": "https://pic.carmucn.com/202408/39a8f0ee83bc1d532e609d3a78e0b33e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mazda CX-5",
        "price": "EXW $1*,914",
        "description": "CX-5 2024 модели 2.0L Автоматический 2WD умный тип"
    },
    {
        "id": "6923b7a1-6e54-4ebe-bfa7-53727d097d11",
        "link": "/market/1005886-info",
        "image_url": "https://pic.carmucn.com/202409/a2880aba5427d5d1dd0dea1d9a0335c0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,345",
        "description": "2024 модели 1.6T DCT Excellence Edition"
    },
    {
        "id": "27f64607-4e73-43c5-83e0-aee0fd4fe53f",
        "link": "/market/1005885-info",
        "image_url": "https://pic.carmucn.com/202409/20050c8b0557b8c785ec7b8032762b89.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "FOB $2*,950",
        "description": "2024 модели, модифицированные 2.0T Автоматический 2WD супер удобная эксклюзивная версия"
    },
    {
        "id": "8a7b8413-179e-4946-be56-a7f4f00b9747",
        "link": "/market/1005884-info",
        "image_url": "https://pic.carmucn.com/202409/d5136c099099752e178e422d1b79f701.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,330",
        "description": "2024 Glory Edition 230TCI Auto Excellence 5 seat"
    },
    {
        "id": "9f9872f0-87e3-4a23-9589-99f21c02b96e",
        "link": "/market/1005883-info",
        "image_url": "https://pic.carmucn.com/202409/1c9bca03b505bdff32dfc7c686d99c03.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $8,*75",
        "description": "2024 1.5T Ручной Glory Edition"
    },
    {
        "id": "20470a4e-6ba7-4c5b-bf4f-273c31bd27a6",
        "link": "/market/1005882-info",
        "image_url": "https://pic.carmucn.com/202409/18d06b5760ceb62c221acfefbe97695f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа X",
        "price": "EXW $1*,020",
        "description": "2025 500 Plus"
    },
    {
        "id": "374d0f44-b868-461b-b689-81eddcef2462",
        "link": "/market/1005881-info",
        "image_url": "https://pic.carmucn.com/202409/76700958adb74be2b19eab458f67dcc9.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta GT",
        "price": "EXW $1*,835",
        "description": "2023 модели 560"
    },
    {
        "id": "1af1ba1c-02f0-4d49-97f3-5f854cec8d1d",
        "link": "/market/1005880-info",
        "image_url": "https://pic.carmucn.com/202409/a58dfc2ef02122e022ec1727552c4c62.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,955",
        "description": "Nhe L 2024 увеличенная 310 флэш-версия"
    },
    {
        "id": "22a371a4-7c50-4fe3-a054-2994c233a52e",
        "link": "/market/1005879-info",
        "image_url": "https://pic.carmucn.com/202409/6c490c0ff6fc14c22888929947fe5d2c.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $1*,860",
        "description": "2024 модели для второго увеличения 1060 Lite Edition"
    },
    {
        "id": "b05c8941-a05e-4b43-87f6-c530dc0c5b4e",
        "link": "/market/1005825-info",
        "image_url": "https://pic.carmucn.com/202408/39a8f0ee83bc1d532e609d3a78e0b33e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mazda CX-5",
        "price": "EXW $1*,914",
        "description": "CX-5 2024 модели 2.0L Автоматический 2WD умный тип"
    },
    {
        "id": "6d77374d-630b-4986-9c73-2271bd9cb399",
        "link": "/market/1005886-info",
        "image_url": "https://pic.carmucn.com/202409/a2880aba5427d5d1dd0dea1d9a0335c0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,345",
        "description": "2024 модели 1.6T DCT Excellence Edition"
    },
    {
        "id": "3ddb0612-338d-4198-99c2-1582a11e61e0",
        "link": "/market/1005885-info",
        "image_url": "https://pic.carmucn.com/202409/20050c8b0557b8c785ec7b8032762b89.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "FOB $2*,950",
        "description": "2024 модели, модифицированные 2.0T Автоматический 2WD супер удобная эксклюзивная версия"
    },
    {
        "id": "9184cd27-ada5-4eb7-9a59-81956ac11818",
        "link": "/market/1005884-info",
        "image_url": "https://pic.carmucn.com/202409/d5136c099099752e178e422d1b79f701.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,330",
        "description": "2024 Glory Edition 230TCI Auto Excellence 5 seat"
    },
    {
        "id": "021e9de3-0c96-4649-a82d-7cdb03ca392e",
        "link": "/market/1005883-info",
        "image_url": "https://pic.carmucn.com/202409/1c9bca03b505bdff32dfc7c686d99c03.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $8,*75",
        "description": "2024 1.5T Ручной Glory Edition"
    },
    {
        "id": "b3bfeb3e-178f-496c-abe4-46126f39e596",
        "link": "/market/1005882-info",
        "image_url": "https://pic.carmucn.com/202409/18d06b5760ceb62c221acfefbe97695f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа X",
        "price": "EXW $1*,020",
        "description": "2025 500 Plus"
    },
    {
        "id": "2ef67f92-a42b-404d-902e-7fd77961f1df",
        "link": "/market/1005881-info",
        "image_url": "https://pic.carmucn.com/202409/76700958adb74be2b19eab458f67dcc9.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta GT",
        "price": "EXW $1*,835",
        "description": "2023 модели 560"
    },
    {
        "id": "fb39a631-892a-44fb-8b34-e02c696edffd",
        "link": "/market/1005880-info",
        "image_url": "https://pic.carmucn.com/202409/a58dfc2ef02122e022ec1727552c4c62.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,955",
        "description": "Nhe L 2024 увеличенная 310 флэш-версия"
    },
    {
        "id": "75db2c42-5aa0-440b-8c24-e5c4821d74a1",
        "link": "/market/1005879-info",
        "image_url": "https://pic.carmucn.com/202409/6c490c0ff6fc14c22888929947fe5d2c.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $1*,860",
        "description": "2024 модели для второго увеличения 1060 Lite Edition"
    },
    {
        "id": "1d373e13-4eac-43e8-8a88-2df5a51b14df",
        "link": "/market/1005825-info",
        "image_url": "https://pic.carmucn.com/202408/39a8f0ee83bc1d532e609d3a78e0b33e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mazda CX-5",
        "price": "EXW $1*,914",
        "description": "CX-5 2024 модели 2.0L Автоматический 2WD умный тип"
    },
    {
        "id": "922ee1a9-bdbe-48a7-a567-85720dc22611",
        "link": "/market/1005886-info",
        "image_url": "https://pic.carmucn.com/202409/a2880aba5427d5d1dd0dea1d9a0335c0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,345",
        "description": "2024 модели 1.6T DCT Excellence Edition"
    },
    {
        "id": "3f3f24d1-d3fd-4423-8764-f0d9c64b3402",
        "link": "/market/1005885-info",
        "image_url": "https://pic.carmucn.com/202409/20050c8b0557b8c785ec7b8032762b89.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "FOB $2*,950",
        "description": "2024 модели, модифицированные 2.0T Автоматический 2WD супер удобная эксклюзивная версия"
    },
    {
        "id": "be029925-43f8-4e2c-aa81-f3182572f3ab",
        "link": "/market/1005884-info",
        "image_url": "https://pic.carmucn.com/202409/d5136c099099752e178e422d1b79f701.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,330",
        "description": "2024 Glory Edition 230TCI Auto Excellence 5 seat"
    },
    {
        "id": "e531a649-7b22-4924-8195-910f88b6ea89",
        "link": "/market/1005883-info",
        "image_url": "https://pic.carmucn.com/202409/1c9bca03b505bdff32dfc7c686d99c03.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $8,*75",
        "description": "2024 1.5T Ручной Glory Edition"
    },
    {
        "id": "643fd65f-370d-44c7-a9fd-254ad0bc4e36",
        "link": "/market/1005882-info",
        "image_url": "https://pic.carmucn.com/202409/18d06b5760ceb62c221acfefbe97695f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа X",
        "price": "EXW $1*,020",
        "description": "2025 500 Plus"
    },
    {
        "id": "05d0b52b-f3b4-4584-a8e5-bba0c435dae8",
        "link": "/market/1005881-info",
        "image_url": "https://pic.carmucn.com/202409/76700958adb74be2b19eab458f67dcc9.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta GT",
        "price": "EXW $1*,835",
        "description": "2023 модели 560"
    },
    {
        "id": "31b6bec7-b05d-409b-9b8d-ffd59fb80d74",
        "link": "/market/1005880-info",
        "image_url": "https://pic.carmucn.com/202409/a58dfc2ef02122e022ec1727552c4c62.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,955",
        "description": "Nhe L 2024 увеличенная 310 флэш-версия"
    },
    {
        "id": "d12b9659-13e4-483b-815d-47a6e7ecaa7e",
        "link": "/market/1005879-info",
        "image_url": "https://pic.carmucn.com/202409/6c490c0ff6fc14c22888929947fe5d2c.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $1*,860",
        "description": "2024 модели для второго увеличения 1060 Lite Edition"
    },
    {
        "id": "e0ff0c11-92bf-4230-839f-c1be3770278e",
        "link": "/market/1005825-info",
        "image_url": "https://pic.carmucn.com/202408/39a8f0ee83bc1d532e609d3a78e0b33e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mazda CX-5",
        "price": "EXW $1*,914",
        "description": "CX-5 2024 модели 2.0L Автоматический 2WD умный тип"
    },
    {
        "id": "988a51e5-7923-4e0b-a21d-bf533533ab61",
        "link": "/market/1005886-info",
        "image_url": "https://pic.carmucn.com/202409/a2880aba5427d5d1dd0dea1d9a0335c0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,345",
        "description": "2024 модели 1.6T DCT Excellence Edition"
    },
    {
        "id": "1c07d949-d955-4e19-bcc5-a8111edc993a",
        "link": "/market/1005885-info",
        "image_url": "https://pic.carmucn.com/202409/20050c8b0557b8c785ec7b8032762b89.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "FOB $2*,950",
        "description": "2024 модели, модифицированные 2.0T Автоматический 2WD супер удобная эксклюзивная версия"
    },
    {
        "id": "4e5bcab1-32f1-45f6-9ac5-0a4a2ab3fad6",
        "link": "/market/1005884-info",
        "image_url": "https://pic.carmucn.com/202409/d5136c099099752e178e422d1b79f701.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,330",
        "description": "2024 Glory Edition 230TCI Auto Excellence 5 seat"
    },
    {
        "id": "2c154d82-43ac-4dac-9800-1554f70d634b",
        "link": "/market/1005883-info",
        "image_url": "https://pic.carmucn.com/202409/1c9bca03b505bdff32dfc7c686d99c03.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $8,*75",
        "description": "2024 1.5T Ручной Glory Edition"
    },
    {
        "id": "9996e926-622e-4e61-8706-3f0e4a0890c0",
        "link": "/market/1005882-info",
        "image_url": "https://pic.carmucn.com/202409/18d06b5760ceb62c221acfefbe97695f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа X",
        "price": "EXW $1*,020",
        "description": "2025 500 Plus"
    },
    {
        "id": "645344b4-c5d9-430f-a094-f38084eeefd7",
        "link": "/market/1005881-info",
        "image_url": "https://pic.carmucn.com/202409/76700958adb74be2b19eab458f67dcc9.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta GT",
        "price": "EXW $1*,835",
        "description": "2023 модели 560"
    },
    {
        "id": "6f783599-2a19-43eb-94d4-cace68ee4b32",
        "link": "/market/1005880-info",
        "image_url": "https://pic.carmucn.com/202409/a58dfc2ef02122e022ec1727552c4c62.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,955",
        "description": "Nhe L 2024 увеличенная 310 флэш-версия"
    },
    {
        "id": "cee14e7a-8727-46a7-923d-962ea76c74d5",
        "link": "/market/1005879-info",
        "image_url": "https://pic.carmucn.com/202409/6c490c0ff6fc14c22888929947fe5d2c.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $1*,860",
        "description": "2024 модели для второго увеличения 1060 Lite Edition"
    },
    {
        "id": "298dcef5-71e6-40cf-9339-54e44e4cd944",
        "link": "/market/1005825-info",
        "image_url": "https://pic.carmucn.com/202408/39a8f0ee83bc1d532e609d3a78e0b33e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mazda CX-5",
        "price": "EXW $1*,914",
        "description": "CX-5 2024 модели 2.0L Автоматический 2WD умный тип"
    },
    {
        "id": "bc5f8825-4898-47a0-92b7-f587a4650eeb",
        "link": "/market/1005886-info",
        "image_url": "https://pic.carmucn.com/202409/a2880aba5427d5d1dd0dea1d9a0335c0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,345",
        "description": "2024 модели 1.6T DCT Excellence Edition"
    },
    {
        "id": "3fbebed2-e262-49da-975c-94ed020a2b52",
        "link": "/market/1005885-info",
        "image_url": "https://pic.carmucn.com/202409/20050c8b0557b8c785ec7b8032762b89.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "FOB $2*,950",
        "description": "2024 модели, модифицированные 2.0T Автоматический 2WD супер удобная эксклюзивная версия"
    },
    {
        "id": "f40e1266-1c15-4908-85dd-3b5b3af7ec96",
        "link": "/market/1005884-info",
        "image_url": "https://pic.carmucn.com/202409/d5136c099099752e178e422d1b79f701.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,330",
        "description": "2024 Glory Edition 230TCI Auto Excellence 5 seat"
    },
    {
        "id": "e7bef445-2412-45fc-8ca0-d79ad20f8c48",
        "link": "/market/1005883-info",
        "image_url": "https://pic.carmucn.com/202409/1c9bca03b505bdff32dfc7c686d99c03.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $8,*75",
        "description": "2024 1.5T Ручной Glory Edition"
    },
    {
        "id": "cb502e40-0bbc-4c89-8ae4-108550fbd2f2",
        "link": "/market/1005882-info",
        "image_url": "https://pic.carmucn.com/202409/18d06b5760ceb62c221acfefbe97695f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа X",
        "price": "EXW $1*,020",
        "description": "2025 500 Plus"
    },
    {
        "id": "8b4ff728-1e9f-4720-b9e4-b4ebc4cafdda",
        "link": "/market/1005881-info",
        "image_url": "https://pic.carmucn.com/202409/76700958adb74be2b19eab458f67dcc9.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta GT",
        "price": "EXW $1*,835",
        "description": "2023 модели 560"
    },
    {
        "id": "e60e1ab8-645d-4bd9-be80-504446878dd6",
        "link": "/market/1005880-info",
        "image_url": "https://pic.carmucn.com/202409/a58dfc2ef02122e022ec1727552c4c62.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,955",
        "description": "Nhe L 2024 увеличенная 310 флэш-версия"
    },
    {
        "id": "0d952240-4fec-440c-b95e-7e322b94cceb",
        "link": "/market/1005879-info",
        "image_url": "https://pic.carmucn.com/202409/6c490c0ff6fc14c22888929947fe5d2c.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $1*,860",
        "description": "2024 модели для второго увеличения 1060 Lite Edition"
    },
    {
        "id": "d78e10a9-017b-41d4-ae13-22b89d422ebe",
        "link": "/market/1005825-info",
        "image_url": "https://pic.carmucn.com/202408/39a8f0ee83bc1d532e609d3a78e0b33e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mazda CX-5",
        "price": "EXW $1*,914",
        "description": "CX-5 2024 модели 2.0L Автоматический 2WD умный тип"
    },
    {
        "id": "5b1d0865-628f-4c0c-97c3-a3b2b1e1b473",
        "link": "/market/1005886-info",
        "image_url": "https://pic.carmucn.com/202409/a2880aba5427d5d1dd0dea1d9a0335c0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,345",
        "description": "2024 модели 1.6T DCT Excellence Edition"
    },
    {
        "id": "4b9767cc-6f89-40be-bc47-84cd616015b2",
        "link": "/market/1005885-info",
        "image_url": "https://pic.carmucn.com/202409/20050c8b0557b8c785ec7b8032762b89.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "FOB $2*,950",
        "description": "2024 модели, модифицированные 2.0T Автоматический 2WD супер удобная эксклюзивная версия"
    },
    {
        "id": "94180cb9-3fec-4e05-98e4-64a3e53c1d06",
        "link": "/market/1005884-info",
        "image_url": "https://pic.carmucn.com/202409/d5136c099099752e178e422d1b79f701.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,330",
        "description": "2024 Glory Edition 230TCI Auto Excellence 5 seat"
    },
    {
        "id": "606a4854-18d4-42e2-918d-3135c7fc524d",
        "link": "/market/1005883-info",
        "image_url": "https://pic.carmucn.com/202409/1c9bca03b505bdff32dfc7c686d99c03.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $8,*75",
        "description": "2024 1.5T Ручной Glory Edition"
    },
    {
        "id": "20366cfc-a354-4b19-8d54-657c3c1aa8d6",
        "link": "/market/1005882-info",
        "image_url": "https://pic.carmucn.com/202409/18d06b5760ceb62c221acfefbe97695f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа X",
        "price": "EXW $1*,020",
        "description": "2025 500 Plus"
    },
    {
        "id": "78ac2c27-be35-4841-8285-f084b68832f6",
        "link": "/market/1005824-info",
        "image_url": "https://pic.carmucn.com/202408/47f64180681a4a9c73dc5c5312b6b628.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Leapmotor Нулевой бег C01",
        "price": "EXW $1*,709",
        "description": "2024 чистый электрический 625 эксклюзивная версия"
    },
    {
        "id": "75aec642-5850-4d61-8ded-b5da036d9d08",
        "link": "/market/1005825-info",
        "image_url": "https://pic.carmucn.com/202408/39a8f0ee83bc1d532e609d3a78e0b33e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mazda CX-5",
        "price": "EXW $1*,914",
        "description": "CX-5 2024 модели 2.0L Автоматический 2WD умный тип"
    },
    {
        "id": "060e6289-b3d8-4059-8622-d5518c356e34",
        "link": "/market/1005879-info",
        "image_url": "https://pic.carmucn.com/202409/6c490c0ff6fc14c22888929947fe5d2c.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $1*,860",
        "description": "2024 модели для второго увеличения 1060 Lite Edition"
    },
    {
        "id": "082e3f07-e815-4dab-bae6-8047b088e710",
        "link": "/market/1005880-info",
        "image_url": "https://pic.carmucn.com/202409/a58dfc2ef02122e022ec1727552c4c62.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,955",
        "description": "Nhe L 2024 увеличенная 310 флэш-версия"
    },
    {
        "id": "591b7af9-2efc-4f0c-9560-82340f2ca568",
        "link": "/market/1005881-info",
        "image_url": "https://pic.carmucn.com/202409/76700958adb74be2b19eab458f67dcc9.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta GT",
        "price": "EXW $1*,835",
        "description": "2023 модели 560"
    },
    {
        "id": "70d53ae9-3c08-4fff-b7f2-eaf4051cb3f3",
        "link": "/market/1005882-info",
        "image_url": "https://pic.carmucn.com/202409/18d06b5760ceb62c221acfefbe97695f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа X",
        "price": "EXW $1*,020",
        "description": "2025 500 Plus"
    },
    {
        "id": "414d3b7e-5fc4-4617-a1ab-addeaf1f3550",
        "link": "/market/1005883-info",
        "image_url": "https://pic.carmucn.com/202409/1c9bca03b505bdff32dfc7c686d99c03.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $8,*75",
        "description": "2024 1.5T Ручной Glory Edition"
    },
    {
        "id": "4798daf5-a3cf-49cd-90ba-42b8dcdbd55f",
        "link": "/market/1005884-info",
        "image_url": "https://pic.carmucn.com/202409/d5136c099099752e178e422d1b79f701.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,330",
        "description": "2024 Glory Edition 230TCI Auto Excellence 5 seat"
    },
    {
        "id": "d85af28b-fc13-41f3-b531-0d3a55e2f761",
        "link": "/market/1005885-info",
        "image_url": "https://pic.carmucn.com/202409/20050c8b0557b8c785ec7b8032762b89.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "FOB $2*,950",
        "description": "2024 модели, модифицированные 2.0T Автоматический 2WD супер удобная эксклюзивная версия"
    },
    {
        "id": "55420a3e-c678-4f54-92f9-68aaac289fc2",
        "link": "/market/1005886-info",
        "image_url": "https://pic.carmucn.com/202409/a2880aba5427d5d1dd0dea1d9a0335c0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,345",
        "description": "2024 модели 1.6T DCT Excellence Edition"
    },
    {
        "id": "88b5620c-14af-49de-b0a0-fe7be54a28dd",
        "link": "/market/1005887-info",
        "image_url": "https://pic.carmucn.com/202409/b046fe67ff4b4331a6ce77ba97e492dd.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 5",
        "price": "EXW $8,*95",
        "description": "2024 Huimin Edition 1,5 л CVT модный тип"
    },
    {
        "id": "a8a8f470-a24d-4c39-bbaa-97d083c3236a",
        "link": "/market/1005888-info",
        "image_url": "https://pic.carmucn.com/202409/369ade76456f2fa86658490b59a9ebed.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PRO",
        "price": "EXW $1*,420",
        "description": "2024 Champion Edition 290T 2WD Shining 5 seats"
    },
    {
        "id": "1286fc02-21d6-4a8a-8b98-657700e33281",
        "link": "/market/1005889-info",
        "image_url": "https://pic.carmucn.com/202409/11f010c08a06528652fd12059f2164bf.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PLUS",
        "price": "EXW $1*,140",
        "description": "2024 Champion Edition 290TGDI DCT Haoyue Edition 7"
    },
    {
        "id": "f3de78ce-3a5c-48cd-82fd-f83c6cbafb7d",
        "link": "/market/1005897-info",
        "image_url": "https://pic.carmucn.com/202409/d09bc5c9cedc5bd71a636f77e57178ef.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Explore 06",
        "price": "EXW $1*,839",
        "description": "2024 Hyuino Edition 1.6T Полный привод исследование"
    },
    {
        "id": "cdc52b6a-054a-4bec-a5e3-3e24556d1b8a",
        "link": "/market/1005898-info",
        "image_url": "https://pic.carmucn.com/202409/4aa536811493149c19bde4219b66b27e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K3",
        "price": "EXW $1*,680",
        "description": "2024 1,5 л CVT Комфортный Premiest Edition"
    },
    {
        "id": "db0d0c14-5088-4f6d-ac35-6b8340f248f5",
        "link": "/market/1005899-info",
        "image_url": "https://pic.carmucn.com/202409/5a9408aa8fb180fa076b84361ce62680.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K5",
        "price": "EXW $1*,001",
        "description": "2021 270T CVVD модная версия"
    },
    {
        "id": "333b0e89-bf03-48d2-b6b5-5cdc75b29f9b",
        "link": "/market/1005900-info",
        "image_url": "https://pic.carmucn.com/202409/774984bce376ee138bcfc566bec4a2cf.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Беги",
        "price": "EXW $9,*31",
        "description": "Yipao 2021 1.4L CVT Люк"
    },
    {
        "id": "ac3bcdb9-f02c-4e41-ae06-c121abd91c49",
        "link": "/market/1005901-info",
        "image_url": "https://pic.carmucn.com/202409/2f454094e70b89b0d492c3f2b3e5a501.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia EV5",
        "price": "EXW $2*,536",
        "description": "2024 модели 720 Wave"
    },
    {
        "id": "4d559902-afeb-439c-a757-180178698179",
        "link": "/market/1005902-info",
        "image_url": "https://pic.carmucn.com/202409/6bf4a001c26309a5c40df1126cbf3d33.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Львиная платиновая граница",
        "price": "EXW $2*,215",
        "description": "Lion Platinum Topway 2023 2.0T Полный привод флагман"
    },
    {
        "id": "c7732fd1-416a-42c4-a912-69d5db636f43",
        "link": "/market/1005903-info",
        "image_url": "https://pic.carmucn.com/202409/40dafdb3f78ff0ca0254f0c22cfed5de.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Львиная платиновая граница",
        "price": "EXW $1*,195",
        "description": "Lion Platinum Topway 2023 1.5T 2WD выдающегося издания"
    },
    {
        "id": "c9c70566-39aa-4496-a0ab-476fcea1f572",
        "link": "/market/1005904-info",
        "image_url": "https://pic.carmucn.com/202409/ba0fe2c560625424b2965be9f5317411.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Умный бег",
        "price": "EXW $1*,212",
        "description": "2021 Ace 2.0L замечательная версия"
    },
    {
        "id": "47826df1-0854-43f2-b6b6-8f32324e9654",
        "link": "/market/1005905-info",
        "image_url": "https://pic.carmucn.com/202409/6d8120a24053acc91893ec9cc7447112.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Сет",
        "price": "EXW $1*,189",
        "description": "Set 2023 1.5L CVT Comfort Edition"
    },
    {
        "id": "e0ee7279-4ff9-453a-8cab-ddee168cbcf9",
        "link": "/market/1005906-info",
        "image_url": "https://pic.carmucn.com/202409/7900478f41e4e5568c7dfad1c955245f.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Сонай",
        "price": "EXW $1*,049",
        "description": "Sennai 2024 1,5 л Comfort Edition"
    },
    {
        "id": "fd99a120-6244-4dba-9bed-ae8d28cc51ba",
        "link": "/market/1005907-info",
        "image_url": "https://pic.carmucn.com/202409/423869a009fc6f907cd807699fc88936.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Skoda Октавия",
        "price": "EXW $1*,963",
        "description": "Octavia 2024 PRO TSI280 Эксклюзивная версия"
    },
    {
        "id": "690a0de6-2f03-40b9-9215-d9530f5e1258",
        "link": "/market/1005908-info",
        "image_url": "https://pic.carmucn.com/202409/8081915ab70562d32a1d5407ecb9b106.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Skoda Kodiaq",
        "price": "EXW $3*,002",
        "description": "Kodiaq 2024 TSI380 7-местный флагман Полный привод Ultimate"
    },
    {
        "id": "1d5b7307-5afc-4e61-b2bb-de97158861e0",
        "link": "/market/1005909-info",
        "image_url": "https://pic.carmucn.com/202409/96c8b5fed8e5b31ee1ddebbf9d0b0387.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Skoda Комик",
        "price": "EXW $1*,453",
        "description": "Kamiq 2024 GT 1,5 л Автоматический Zhenxiang Edition"
    },
    {
        "id": "d6ffe640-565a-4477-9285-20ccccb24901",
        "link": "/market/1005912-info",
        "image_url": "https://pic.carmucn.com/202409/a8937c7190cfaef0cd142cd7996cf898.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tharu",
        "price": "EXW $2*,625",
        "description": "2024 330TSI Полный привод ежемесячное издание"
    },
    {
        "id": "efa97e8c-d959-413c-8210-4d979b1f1134",
        "link": "/market/1005914-info",
        "image_url": "https://pic.carmucn.com/202409/f213e8f5df3caafc15a434e5b5b5ca74.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tharu",
        "price": "EXW $1*,482",
        "description": "2024 300TSI 2WD новолуние"
    },
    {
        "id": "aa0421dc-76ac-44e1-9b54-abeb0b7a940a",
        "link": "/market/1005915-info",
        "image_url": "https://pic.carmucn.com/202409/1ad1151e9ddee8857bffd4ed83ca4514.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Passat",
        "price": "EXW $2*,508",
        "description": "2024 280TSI Star Elite Edition"
    },
    {
        "id": "f5b975ad-f6fe-4337-a69c-0e93e72dfbf2",
        "link": "/market/1005916-info",
        "image_url": "https://pic.carmucn.com/202409/bd1c6b885721762feabffec5c53d0ec3.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Passat",
        "price": "EXW $2*,578",
        "description": "2024 330TSI Elite Edition"
    },
    {
        "id": "318ce902-1ed0-4d9c-8984-8c9397c3c99d",
        "link": "/market/1005917-info",
        "image_url": "https://pic.carmucn.com/202409/06a6704f930559ff80d608e0d1b2903e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Atlas Cross Sport",
        "price": "EXW $3*,738",
        "description": "2024 380TSI Полный привод Long Yao Edition"
    },
    {
        "id": "eba75b23-3102-4bc4-a400-bba21f015d75",
        "link": "/market/1005918-info",
        "image_url": "https://pic.carmucn.com/202409/679d2aec637f5fa1bea1e7cbfcf1db97.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Teramont X",
        "price": "EXW $3*,930",
        "description": "2024 380TSI Полный привод Long Yao Edition"
    },
    {
        "id": "e3ab4660-fdea-4084-8ea6-7a6628f87698",
        "link": "/market/1005919-info",
        "image_url": "https://pic.carmucn.com/202409/601fc14b5730b5c9c5be6518eb81040a.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tiguan L",
        "price": "EXW $2*,120",
        "description": "2024 выдающиеся модели 330TSI Автоматический 2WD R-Line Long Yao Edition"
    },
    {
        "id": "720f8dea-2dca-485f-b7d8-325b91772294",
        "link": "/market/1005923-info",
        "image_url": "https://pic.carmucn.com/202409/fe1e35e79b2bea0abc64184e9095a3e2.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen New Lavida",
        "price": "EXW $1*,261",
        "description": "2024 300TSI DSG Star ведущая версия"
    },
    {
        "id": "3624a159-9ef4-4032-a120-9075da57c5e7",
        "link": "/market/1005924-info",
        "image_url": "https://pic.carmucn.com/202409/1f70c10c3a69ce9563d4175544dc5039.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Lamando",
        "price": "EXW $1*,613",
        "description": "2024  L 280TSI DSG Spicy Edition"
    },
    {
        "id": "dbfd4789-cfd8-4115-8f1d-6093dcbd0c14",
        "link": "/market/1005925-info",
        "image_url": "https://pic.carmucn.com/202409/c5b6b2cca4735c9bf4d73a03014edb35.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 300",
        "price": "EXW $2*,865",
        "description": "GreatWall  2024 2.0T Conqueror"
    },
    {
        "id": "723d450f-11ed-4576-b257-221a3448b606",
        "link": "/market/1005926-info",
        "image_url": "https://pic.carmucn.com/202409/caf75e1ccd54c7005d299deed93b826b.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 300 новая энергия",
        "price": "EXW $3*,465",
        "description": "2024 Hi4-T"
    },
    {
        "id": "964880e3-e64d-42e0-9d59-a3ad99146f8d",
        "link": "/market/1005927-info",
        "image_url": "https://pic.carmucn.com/202409/f7ceffffb04678bb0b48a150e39394bf.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 400 новая энергия",
        "price": "EXW $3*,000",
        "description": "400 New Energy 2024 Hi4-T Внедорожный Edition"
    },
    {
        "id": "5b855f31-1686-47d0-8758-692e825a840c",
        "link": "/market/1005928-info",
        "image_url": "https://pic.carmucn.com/202409/9d4baee66c51c370f4964527f3990045.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 500",
        "price": "EXW $4*,885",
        "description": "GreatWall TANK 500 2023 3.0T Business Dengfeng 5-Seats"
    },
    {
        "id": "beb51391-e9cc-49bb-bda0-640e0305a95a",
        "link": "/market/1005929-info",
        "image_url": "https://pic.carmucn.com/202409/e335ec68d2cf25aff38eb1d0b776169b.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 500 новая энергия",
        "price": "EXW $4*,785",
        "description": "500 New Energy 2023 модели Hi4-T"
    },
    {
        "id": "8b42fb55-a102-4889-bcae-027984cc8fc3",
        "link": "/market/1005930-info",
        "image_url": "https://pic.carmucn.com/202409/94ba8f2c0ac0b948d53c06cca127aa71.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 700 новая энергия",
        "price": "EXW $5*,730",
        "description": "2024 Hi4-T экстремальная версия"
    },
    {
        "id": "d487774d-9c12-410d-ae1f-6baabeea30b6",
        "link": "/market/1005931-info",
        "image_url": "https://pic.carmucn.com/202409/20b670beca5537e5f3b8f624d2bc3883.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tesla Model Y",
        "price": "EXW $4*,575",
        "description": "Модель Y 2024 Performance Высокопроизводительная версия"
    },
    {
        "id": "190d8a89-3318-4494-ad37-90c6306b8427",
        "link": "/market/1005932-info",
        "image_url": "https://pic.carmucn.com/202409/34e34763bb43cb36799f0c4ec7ee89d5.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tesla Model 3",
        "price": "EXW $4*,945",
        "description": "Модель 3 2024 Высокопроизводительная версия полного привода"
    },
    {
        "id": "9ff2be81-bd7c-453a-b61d-6d113a9c32f5",
        "link": "/market/1005933-info",
        "image_url": "https://pic.carmucn.com/202409/d1b00de53c2f6259fc7f24ae9ede9172.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Denza D9",
        "price": "EXW $4*,760",
        "description": "2024 модели класса люкс DM-i 970"
    },
    {
        "id": "c0856974-ae12-45c6-a431-04f487340589",
        "link": "/market/1005934-info",
        "image_url": "https://pic.carmucn.com/202409/33ef99d61eedfa73d94f4fb9285e7bac.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Denza D9",
        "price": "EXW $5*,032",
        "description": "2024 EV 600 Полный привод"
    },
    {
        "id": "07a3aaf6-04cc-4c1e-a3fc-d2a7c89bfd78",
        "link": "/market/1005935-info",
        "image_url": "https://pic.carmucn.com/202409/c0ef8a7535389f9a0f59a152e2c5719a.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volvo XC60",
        "price": "EXW $3*,303",
        "description": "2025 B5 Полный привод Zhiyi Deluxe Edition"
    },
    {
        "id": "b87d0678-faed-43de-8ef3-ad95773a56cf",
        "link": "/market/1005936-info",
        "image_url": "https://pic.carmucn.com/202409/1f97e651aa5c008b67f1ce12efe989c5.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volvo XC40",
        "price": "EXW $2*,005",
        "description": "2024 B3 Zhiyuan Deluxe"
    },
    {
        "id": "27e79d1d-19a2-416e-a942-c1ce9adbc96f",
        "link": "/market/1005937-info",
        "image_url": "https://pic.carmucn.com/202409/601d94139a56e46850ba38e75beb6869.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volvo S60",
        "price": "EXW $3*,844",
        "description": "2025 B4 Zhiyi Deluxe Edition"
    },
    {
        "id": "de3da31e-687d-4d86-8bf1-afaf8deba2de",
        "link": "/market/1005938-info",
        "image_url": "https://pic.carmucn.com/202409/a543ea946c82b77ec9e572b08efa4a7e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volvo S90",
        "price": "EXW $3*,426",
        "description": "2025 B5 Zhiyi Deluxe Edition"
    },
    {
        "id": "713951b5-0165-4fe0-97b0-0a8ea4c1bc45",
        "link": "/market/1005939-info",
        "image_url": "https://pic.carmucn.com/202409/f44a2ec90d8ab3a2f1b6d3be3df383dc.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Monza",
        "price": "EXW $9,*24",
        "description": "2024 1.5L DCG Joy"
    },
    {
        "id": "a50de459-9836-40b6-b3f3-1aa284a38cfa",
        "link": "/market/1005941-info",
        "image_url": "https://pic.carmucn.com/202409/7e1a83c82b987cc1d53eb25cc8bcca3e.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Malibu XL",
        "price": "EXW $1*,420",
        "description": "2023 1.5T Move"
    },
    {
        "id": "ab70776a-e4e6-457d-9516-120aa4629123",
        "link": "/market/1005942-info",
        "image_url": "https://pic.carmucn.com/202409/b735f06b3309b2b30b4979f21f357459.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Blazer",
        "price": "EXW $2*,620",
        "description": "2023 Mild Hybrid 650T Redline Ting"
    },
    {
        "id": "249eb433-d672-4e09-9975-0df31d612a87",
        "link": "/market/1005943-info",
        "image_url": "https://pic.carmucn.com/202409/5f9b24e9cbdf790193709d7d92b04620.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Equinox",
        "price": "EXW $1*,705",
        "description": "2023 1.5T Run"
    },
    {
        "id": "554bbf59-a90d-43cc-8c2e-1a17cf59581c",
        "link": "/market/1005945-info",
        "image_url": "https://pic.carmucn.com/202409/603e244868613afa8fd4e38745b510a2.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Equinox Plus",
        "price": "EXW $2*,605",
        "description": "2024 155km ACTIV до версии"
    },
    {
        "id": "1e0150ab-84d5-4adb-9313-a76656b4a0d6",
        "link": "/market/1005946-info",
        "image_url": "https://pic.carmucn.com/202409/e4ce06bb6ca429da377523e57bed01c8.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Menlo",
        "price": "EXW $1*,545",
        "description": "2023 Star Enjoyment Plus"
    },
    {
        "id": "2e3a7bba-528e-42bd-973d-b624eb710e84",
        "link": "/market/1005951-info",
        "image_url": "https://pic.carmucn.com/202409/41d8521e229484d5c7e90ce0fc6e5b12.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tayron",
        "price": "EXW $2*,970",
        "description": "2024 модели 380TSI Полный привод R-Line High-Speed Edition"
    },
    {
        "id": "7c477f7c-e3eb-4bdf-aa58-36201b18bcd6",
        "link": "/market/1005952-info",
        "image_url": "https://pic.carmucn.com/202409/15e3397597307a82e965a61fb01a43a0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen T-Roc",
        "price": "EXW $1*,785",
        "description": "2024 300TSI DSG 2WD Starlight Edition"
    },
    {
        "id": "d25bd123-bd2a-4be8-9423-73851a0f7607",
        "link": "/market/1005953-info",
        "image_url": "https://pic.carmucn.com/202409/67f1f3f297a182a18ba9726780433be0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Sagitar",
        "price": "EXW $1*,870",
        "description": "2024 300TSI DSG за пределами версии"
    },
    {
        "id": "e60d6a37-a71e-44e1-bd36-ce66bcec2015",
        "link": "/market/1005965-info",
        "image_url": "https://pic.carmucn.com/202409/a3ab9458b64ee07e31318c1f11797082.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota RAV4",
        "price": "EXW $1*,395",
        "description": "2023 2.0L CVT 2WD Urban"
    },
    {
        "id": "c15659f3-a84e-46fd-8c9e-eccc23af1317",
        "link": "/market/1005966-info",
        "image_url": "https://pic.carmucn.com/202409/8bf52701d735b7b7bc8bbca4e747ec76.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota RAV4",
        "price": "EXW $2*,085",
        "description": "2023 2.0L CVT 4WD Adventure Plus"
    },
    {
        "id": "ba0ccee9-aedb-4f43-b5fc-a59b2693b7d2",
        "link": "/market/1005967-info",
        "image_url": "https://pic.carmucn.com/202409/de58056aa8e1a78f8b1af9d8b63e44c6.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota Crown Kluger",
        "price": "EXW $3*,380",
        "description": "2024 модели 2.0T Полный привод"
    },
    {
        "id": "f6e58820-b27d-42c8-8e14-6315a247bf31",
        "link": "/market/1006148-info",
        "image_url": "https://pic1.chehang168.com/202302/cf98febaadc811eda28e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K3",
        "price": "EXW $1*,311",
        "description": "2024 1,5 л CVT Deluxe Smo Edition"
    },
    {
        "id": "9a2b2ece-724f-422c-ad79-8696c0ba9254",
        "link": "/market/1006146-info",
        "image_url": "https://pic1.chehang168.com/202302/cf98febaadc811eda28e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K3",
        "price": "EXW $1*,033",
        "description": "2023 1.5L CVT Luxury"
    },
    {
        "id": "0f66e47d-f31e-4539-8819-111d41472f18",
        "link": "/market/1006141-info",
        "image_url": "https://pic1.chehang168.com/202405/45e7a3d99f465a745a992d8dc9c369b2.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PRO",
        "price": "EXW $1*,253",
        "description": "2024 Champion Edition 290T 2WD Highlight 5 seats"
    },
    {
        "id": "8597bdfb-9b57-4eb7-8ef8-14173ae8a00c",
        "link": "/market/1006131-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,951",
        "description": "2024 1.5T CVT Deluxe Edition"
    },
    {
        "id": "235ac187-4e92-4600-8e09-da2c51da3d68",
        "link": "/market/1006127-info",
        "image_url": "https://pic1.chehang168.com/202208/48aacde4116e11ed8bf100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $2*,526",
        "description": "2024 дополнительных 1060 эксклюзивная версия"
    },
    {
        "id": "0001a1d0-ed42-4db2-bb71-26087424f664",
        "link": "/market/1006105-info",
        "image_url": "https://pic.carmucn.com/202409/76fd65ed033e76eb4a4eb395c5723ca5.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tiguan L",
        "price": "EXW $3*,384",
        "description": "2024 PRO 380TSI Полный привод R-Line Zhizun Edition"
    },
    {
        "id": "716160a7-b3d9-4c6c-9342-7716ad6823be",
        "link": "/market/1006112-info",
        "image_url": "https://pic.carmucn.com/202409/e8fdae2ebddf1b5825e770054b418d40.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Infiniti QX50",
        "price": "EXW $3*,690",
        "description": "2024 2.0T 2WD пилотная версия"
    },
    {
        "id": "24b7a964-28bf-4052-b733-9287eca35b56",
        "link": "/market/1006113-info",
        "image_url": "https://pic.carmucn.com/202409/2a886a39fdc3ee408de23800776db7ca.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "GAC M8",
        "price": "EXW $2*,225",
        "description": "2024 ведущих шоу серии 390T Deluxe Edition"
    },
    {
        "id": "32ef9612-8299-4ac6-bc20-46ff9792640a",
        "link": "/market/1006122-info",
        "image_url": "https://pic.carmucn.com/202409/dce2aee770b0d824b9fa038b73ed72ed.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Infiniti QX60",
        "price": "EXW $3*,813",
        "description": "2024 2.0T Элегантная версия"
    },
    {
        "id": "cf4a3069-cc5c-446c-a95a-364138e335eb",
        "link": "/market/1006127-info",
        "image_url": "https://pic1.chehang168.com/202208/48aacde4116e11ed8bf100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $2*,526",
        "description": "2024 дополнительных 1060 эксклюзивная версия"
    },
    {
        "id": "b0af8cca-5b7a-4030-8f22-516b663060c7",
        "link": "/market/1006128-info",
        "image_url": "https://pic1.chehang168.com/202208/48aacde4116e11ed8bf100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Neta S",
        "price": "EXW $2*,789",
        "description": "2024 увеличенная версия 1060"
    },
    {
        "id": "21311d6c-7aa4-4542-9663-fb973d145592",
        "link": "/market/1006129-info",
        "image_url": "https://pic1.chehang168.com/202404/368643acab918e815e2b15154b175451.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,865",
        "description": "Nhe L 2024 увеличенная 220 флэш-версия"
    },
    {
        "id": "ad75124c-db36-4724-9f98-4172ac89cddb",
        "link": "/market/1006130-info",
        "image_url": "https://pic1.chehang168.com/202404/368643acab918e815e2b15154b175451.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hozon Нежа L",
        "price": "EXW $1*,391",
        "description": "2024 с увеличением 310 флэш-заряда PRO Edition"
    },
    {
        "id": "478e03fd-6915-410b-b3de-6735a07bb033",
        "link": "/market/1006131-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,951",
        "description": "2024 1.5T CVT Deluxe Edition"
    },
    {
        "id": "93b520d0-ed36-47c6-9582-78b2fbd10e33",
        "link": "/market/1006132-info",
        "image_url": "https://pic1.chehang168.com/202405/e4e8e4149d8023d45490f5bb2e01eba7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 7",
        "price": "EXW $1*,923",
        "description": "2024 1.5T CVT Уважаемые издания"
    },
    {
        "id": "1c54066d-6370-4ac5-8096-48da1fc6c0d5",
        "link": "/market/1006133-info",
        "image_url": "https://pic1.chehang168.com/202410/7bd612e7b2d032516eaa43a9c7fa4e55.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,200",
        "description": "2024 Glory Edition 230TCI Manual Advance 7 seat"
    },
    {
        "id": "3f9a674a-b0bd-4560-914f-64e42b371455",
        "link": "/market/1006134-info",
        "image_url": "https://pic1.chehang168.com/202410/7bd612e7b2d032516eaa43a9c7fa4e55.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8",
        "price": "EXW $1*,588",
        "description": "2024 Glory Edition 230TCI Auto Excellence 7 seat"
    },
    {
        "id": "829c69a8-a11a-4589-9836-022a82044b64",
        "link": "/market/1006135-info",
        "image_url": "https://pic1.chehang168.com/202409/c1e68ee093553eaa22c022cf7dc2e71d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "EXW $2*,915",
        "description": "2024 модели 2.0T с двойным сцепления 2WD супер удобная версия"
    },
    {
        "id": "d3fc5ac0-30b7-454d-9cbf-6a3d3971b23c",
        "link": "/market/1006136-info",
        "image_url": "https://pic1.chehang168.com/202409/c1e68ee093553eaa22c022cf7dc2e71d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 9",
        "price": "EXW $2*,249",
        "description": "2023 2.0T двойное сцепление с двойным приводом Deluxe Edition 5 мест"
    },
    {
        "id": "e59c9711-0c8a-4a95-a018-27b27c00354b",
        "link": "/market/1006137-info",
        "image_url": "https://pic1.chehang168.com/202310/4b6f11cc724111eea2d100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 5",
        "price": "EXW $7,*04",
        "description": "2024 1.5L MT Urban"
    },
    {
        "id": "3cff99d4-d5fa-42a5-a441-5c804c477234",
        "link": "/market/1006138-info",
        "image_url": "https://pic1.chehang168.com/202209/27ffd6f440a611ed8e7e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,392",
        "description": "2024 модели 1.6T DCT мудрости"
    },
    {
        "id": "afdddc91-b13f-4807-9ed4-c4051f969c32",
        "link": "/market/1006139-info",
        "image_url": "https://pic1.chehang168.com/202209/27ffd6f440a611ed8e7e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Arrizo 8",
        "price": "EXW $1*,225",
        "description": "2024 модели 1.6T DCT"
    },
    {
        "id": "0eb08d36-d539-4ea6-852b-8bb815e44a66",
        "link": "/market/1006140-info",
        "image_url": "https://pic1.chehang168.com/202405/45e7a3d99f465a745a992d8dc9c369b2.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PRO",
        "price": "FOB $1*,022",
        "description": "2024 Champion Edition 290T 2WD Highlight 7 seats"
    },
    {
        "id": "50ca28a4-5537-4f11-91cc-89fd3c48f60a",
        "link": "/market/1006141-info",
        "image_url": "https://pic1.chehang168.com/202405/45e7a3d99f465a745a992d8dc9c369b2.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PRO",
        "price": "EXW $1*,253",
        "description": "2024 Champion Edition 290T 2WD Highlight 5 seats"
    },
    {
        "id": "53338014-8744-4dab-a468-d533ab2a1d91",
        "link": "/market/1006142-info",
        "image_url": "https://pic.carmucn.com/202409/3fec9befb95e2adf01d2ce9a1652f3db.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota Venza",
        "price": "EXW $2*,381",
        "description": "2024 2.0L CVT 2WD Premth Edition"
    },
    {
        "id": "51e97cc6-997f-4477-99bd-81a11eb9a5a1",
        "link": "/market/1006143-info",
        "image_url": "https://pic1.chehang168.com/202311/3d30f28281e211eea31d00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PLUS",
        "price": "EXW $1*,531",
        "description": "2024 Champion Edition 290TGDI DCT Haoyue Edition 5 мест"
    },
    {
        "id": "89787f90-98cd-48dd-96f5-ddd6ac3b10c4",
        "link": "/market/1006144-info",
        "image_url": "https://pic1.chehang168.com/202311/3d30f28281e211eea31d00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Tiggo 8 PLUS",
        "price": "EXW $1*,225",
        "description": "Tiggo 8 Plus 2024 Champion 290TGDI DCT Premium 5 Seat"
    },
    {
        "id": "05373a15-8f7f-41af-841a-1fbed2426ba9",
        "link": "/market/1006145-info",
        "image_url": "https://pic1.chehang168.com/202405/46cedf42650c4c4a4eb054c3bcfa271c.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chery Explore 06",
        "price": "EXW $1*,588",
        "description": "2025 City Edition 1.6T 2WD Deluxe"
    },
    {
        "id": "758bbd32-1955-40c2-9d05-4d10b34cc8b9",
        "link": "/market/1006146-info",
        "image_url": "https://pic1.chehang168.com/202302/cf98febaadc811eda28e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K3",
        "price": "EXW $1*,033",
        "description": "2023 1.5L CVT Luxury"
    },
    {
        "id": "1568b193-dffc-4ef4-a41b-6d4fdcdc1580",
        "link": "/market/1006147-info",
        "image_url": "https://pic1.chehang168.com/202407/bc50778f6f8eb5311d2f5ce4cd264e57.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota Frontlander",
        "price": "EXW $1*,421",
        "description": "2024 модели 2.0L Smart Electric Mixed Dual Led Edition"
    },
    {
        "id": "03a60b1d-71b6-4e0d-8dbd-b1f009c3ad66",
        "link": "/market/1006148-info",
        "image_url": "https://pic1.chehang168.com/202302/cf98febaadc811eda28e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K3",
        "price": "EXW $1*,311",
        "description": "2024 1,5 л CVT Deluxe Smo Edition"
    },
    {
        "id": "4f43af52-aa91-4b43-a638-c2f044b6ac4f",
        "link": "/market/1006149-info",
        "image_url": "https://pic1.chehang168.com/202409/ad61d5836d13d7351411841af73f99d6.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K5",
        "price": "EXW $1*,615",
        "description": "2021 270T CVVD новая версия"
    },
    {
        "id": "eac6054e-7192-45f6-9af9-a0c80aca4cb0",
        "link": "/market/1006150-info",
        "image_url": "https://pic1.chehang168.com/202409/ad61d5836d13d7351411841af73f99d6.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia K5",
        "price": "EXW $2*,113",
        "description": "2021 380T GT-Line Han Edition"
    },
    {
        "id": "07b2a3cf-ed68-4fba-9df1-fb978eb61d49",
        "link": "/market/1006151-info",
        "image_url": "https://pic1.chehang168.com/202101/ceeecbc8593f11ebb38d00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Беги",
        "price": "EXW $9,*54",
        "description": "Yi Run 2021 1.4L CVT Fun Fun Edition"
    },
    {
        "id": "59929b1c-b258-4204-a0d0-8f699b0de01e",
        "link": "/market/1006152-info",
        "image_url": "https://pic1.chehang168.com/202211/1b77bbda5c1d11ed940b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Львиная платиновая граница",
        "price": "EXW $1*,187",
        "description": "Lion Platinum Tops 2023 1.5T двухприводной Deluxe Edition"
    },
    {
        "id": "c060843c-3ce9-42a8-9615-006f4ee819a3",
        "link": "/market/1006153-info",
        "image_url": "https://pic1.chehang168.com/202007/fcb5949ebb8111eaa2ce00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota Wildlander",
        "price": "EXW $1*,861",
        "description": "2023 модели 2.0L CVT 2WD ведущая версия"
    },
    {
        "id": "74625bbe-af8a-4b85-a7af-fc3cf102e112",
        "link": "/market/1006154-info",
        "image_url": "https://pic1.chehang168.com/202211/1b77bbda5c1d11ed940b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Львиная платиновая граница",
        "price": "EXW $1*,962",
        "description": "Lion Platinum Topway 2023 2.0T 2WD Premiered Edition"
    },
    {
        "id": "22f75d91-00d9-4f54-aeb2-aa649218487a",
        "link": "/market/1006155-info",
        "image_url": "https://pic1.chehang168.com/202211/1b77bbda5c1d11ed940b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Львиная платиновая граница",
        "price": "EXW $2*,795",
        "description": "2023 2.0L HEV 2WD Deluxe Edition"
    },
    {
        "id": "acd53b3d-f321-485f-85e1-04dc1c78588f",
        "link": "/market/1006156-info",
        "image_url": "https://pic1.chehang168.com/202211/1b77bbda5c1d11ed940b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Львиная платиновая граница",
        "price": "EXW $2*,154",
        "description": "Lion Platinum Topway 2023 2.0T 2WD флагман"
    },
    {
        "id": "b37e7b43-e439-4f0e-a0e2-fcee8d273001",
        "link": "/market/1006157-info",
        "image_url": "https://pic1.chehang168.com/202304/433de1aee34e11ed87c900163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Сет",
        "price": "EXW $1*,037",
        "description": "Seltos 2023 1,5 л CVT Deluxe Edition"
    },
    {
        "id": "a5a11319-f5e9-45e1-9ea5-52821eb6c914",
        "link": "/market/1006158-info",
        "image_url": "https://pic1.chehang168.com/202204/52652854bfcd11eca60c00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota Highlander",
        "price": "EXW $3*,340",
        "description": "2024 380T Полный привод выдающегося издания 7-местный"
    },
    {
        "id": "3f9b170e-e08e-4980-8728-d3614ddab60f",
        "link": "/market/1006159-info",
        "image_url": "https://pic1.chehang168.com/202405/1e16eb714fed8e162e5eac7a51d228e9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz GLB",
        "price": "EXW $3*,000",
        "description": "2024 GLB 220 динамический тип"
    },
    {
        "id": "19ffd860-4535-4892-a55e-048565d162fd",
        "link": "/market/1006160-info",
        "image_url": "https://pic1.chehang168.com/202405/20033b9cb30870b51d4410879f066ec6.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Kia Сонай",
        "price": "EXW $1*,760",
        "description": "Sennai 2024 1,5 л роскошная интеллектуальное издание"
    },
    {
        "id": "dafe703d-44cb-4ea1-a337-dec6a92bd7f4",
        "link": "/market/1006161-info",
        "image_url": "https://pic1.chehang168.com/202405/1e16eb714fed8e162e5eac7a51d228e9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz GLB",
        "price": "EXW $3*,360",
        "description": "2024 Модные модели GLB 220"
    },
    {
        "id": "3ed2117d-5a3f-411e-bf1f-b23f0b240afb",
        "link": "/market/1006162-info",
        "image_url": "https://pic1.chehang168.com/202205/2da392c2d74611ec971900163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Skoda Октавия",
        "price": "EXW $1*,980",
        "description": "Octavia 2023 модели PRO TSI280 Эксклюзивная версия"
    },
    {
        "id": "b10f73f8-6222-415d-ab17-461c78397a03",
        "link": "/market/1006163-info",
        "image_url": "https://pic1.chehang168.com/202204/52652854bfcd11eca60c00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota Highlander",
        "price": "EXW $3*,369",
        "description": "2024 модели 2.5L Smart Electric Mixed Double 2WD Deluxe Edition 7"
    },
    {
        "id": "055315cd-1e78-40a2-86aa-19306a9b6518",
        "link": "/market/1006164-info",
        "image_url": "https://pic1.chehang168.com/202205/9308bc04d74711ec85be00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Skoda Kodiaq GT",
        "price": "EXW $3*,245",
        "description": "2024 TSI380 Полный привод флагман"
    },
    {
        "id": "eed01ec3-018b-4ea9-bf37-59dbefd4cb7d",
        "link": "/market/1006165-info",
        "image_url": "https://pic1.chehang168.com/202410/4f0b54ee3ee2909259853eb5516deea7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz GLE",
        "price": "EXW $9*,500",
        "description": "2024 Модный GLE 350 4MATIC Модный тип"
    },
    {
        "id": "63dfdec0-82ab-4597-b9e4-7214ffe8ff31",
        "link": "/market/1006166-info",
        "image_url": "https://pic1.chehang168.com/202410/4f0b54ee3ee2909259853eb5516deea7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz GLE",
        "price": "EXW $9*,720",
        "description": "2024 GLE 450 4MATIC Динамический тип"
    },
    {
        "id": "36203cd4-ed0d-44d4-877b-8429d3636373",
        "link": "/market/1006167-info",
        "image_url": "https://pic1.chehang168.com/202404/ad75b111305e556223051b8aeb217c3d.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Toyota SIENNA",
        "price": "EXW $5*,126",
        "description": "Sena  2024 2.5L смешанная платиновая версия"
    },
    {
        "id": "8ee4cee5-cdb2-45bf-8b88-71561cc3b714",
        "link": "/market/1006168-info",
        "image_url": "https://pic1.chehang168.com/202307/91ce7dfa255811ee8f7900163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "GAC M8",
        "price": "EXW $2*,826",
        "description": "2024 ведущих шоу серии 390T эксклюзивная версия"
    },
    {
        "id": "770f9570-df71-4843-a528-74b34a5e2261",
        "link": "/market/1006169-info",
        "image_url": "https://pic1.chehang168.com/202204/1623b2acc05411eca09400163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "GAC M6",
        "price": "EXW $1*,554",
        "description": "2024 MAX 270T WDCT почетное издание"
    },
    {
        "id": "c187de22-af0b-4651-88f9-81e6573cfef1",
        "link": "/market/1006170-info",
        "image_url": "https://pic1.chehang168.com/202204/90f35d8ac05311ec86d500163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "GAC GS8",
        "price": "EXW $3*,733",
        "description": "2024 TwinPower Series 2.0TM 4WD Premium"
    },
    {
        "id": "45b3de6b-3733-4a08-9799-10c4214c3e33",
        "link": "/market/1006171-info",
        "image_url": "https://pic1.chehang168.com/202311/17f01984845e11ee9f0800163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Skoda Комик",
        "price": "EXW $1*,788",
        "description": "Kamiq 2024 1.5L AT Comfort"
    },
    {
        "id": "af27d934-81d9-4a11-9daf-f310c4ee8b68",
        "link": "/market/1006172-info",
        "image_url": "https://pic1.chehang168.com/202210/6cc2ef9246e611ed9e0e00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Aion AION Y",
        "price": "EXW $1*,721",
        "description": "2024 Younger Star Yao версия 49.75kWh"
    },
    {
        "id": "21577a30-46a1-41e1-98d6-a4c7ec26f157",
        "link": "/market/1006173-info",
        "image_url": "https://pic1.chehang168.com/202104/a2fd7628a56a11ebbe1000163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Skoda Быстрый пирог",
        "price": "EXW $1*,200",
        "description": "Speed 2024 TSI280 DSG Эксклюзивная версия"
    },
    {
        "id": "cb66015b-2785-4b37-a565-e30552a9e3fa",
        "link": "/market/1006174-info",
        "image_url": "https://pic1.chehang168.com/202104/a2fd7628a56a11ebbe1000163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Skoda Быстрый пирог",
        "price": "EXW $1*,976",
        "description": "Speed 2024 TSI330 DSG экстравагантная версия"
    },
    {
        "id": "1f5067cd-4781-4244-b062-d0c12e95ec7a",
        "link": "/market/1006175-info",
        "image_url": "https://pic1.chehang168.com/202407/c9506303f9c14ce97ccb8eb8d56ca3b6.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Aion AION V",
        "price": "EXW $1*,120",
        "description": "2024  T-Rex 520"
    },
    {
        "id": "6500954c-97c9-447d-a274-ab3e35fcebb3",
        "link": "/market/1006176-info",
        "image_url": "https://pic1.chehang168.com/202410/4f0b54ee3ee2909259853eb5516deea7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz GLE",
        "price": "EXW $1*2,300",
        "description": "2024 GLE 450 4MATIC Модная модель"
    },
    {
        "id": "5d9785da-2a24-465c-9685-264b8f127fe4",
        "link": "/market/1006177-info",
        "image_url": "https://pic1.chehang168.com/202409/a0a200c216cd9a0ecfdc64c56873eb68.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tharu",
        "price": "EXW $1*,240",
        "description": "2024 300TSI 2WD версия"
    },
    {
        "id": "f6c0b829-8bc2-43aa-84d1-f5176489798b",
        "link": "/market/1006178-info",
        "image_url": "https://pic1.chehang168.com/202310/b5096578747c11ee9f8900163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Aion AION S MAX",
        "price": "EXW $1*,870",
        "description": "2024 70-звездная версия 54.6kWh"
    },
    {
        "id": "40f7661c-10d8-4572-8452-6f3f3889b6ff",
        "link": "/market/1006179-info",
        "image_url": "https://pic1.chehang168.com/202409/a0a200c216cd9a0ecfdc64c56873eb68.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Tharu",
        "price": "EXW $2*,073",
        "description": "2024 300TSI 2WD полнолуние"
    },
    {
        "id": "53c995a5-d87a-43ed-b7c5-f3fbbb45ef5d",
        "link": "/market/1006180-info",
        "image_url": "https://pic1.chehang168.com/202410/4f0b54ee3ee2909259853eb5516deea7.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz GLE",
        "price": "EXW $1*9,200",
        "description": "2024 GLE 450 4MATIC Deluxe"
    },
    {
        "id": "0d5955ad-7eba-4361-b0bd-0705d6c85d71",
        "link": "/market/1006181-info",
        "image_url": "https://pic1.chehang168.com/202308/7c620066372a11eeb82a00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Aion AION S",
        "price": "EXW $1*,509",
        "description": "S 2023 Charm 580 литий-железо фосфат"
    },
    {
        "id": "21b46843-dc99-4352-b2b5-5036282ca6e6",
        "link": "/market/1006182-info",
        "image_url": "https://pic1.chehang168.com/202409/f58e360a71c9d88a1ac95b12dab41d6e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Passat",
        "price": "EXW $2*,391",
        "description": "2024 380TSI Dragon Edition"
    },
    {
        "id": "31f1aaf7-375d-4f7e-9b63-1f7fcbb8e3e3",
        "link": "/market/1006183-info",
        "image_url": "https://pic1.chehang168.com/202409/f58e360a71c9d88a1ac95b12dab41d6e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Passat",
        "price": "EXW $2*,750",
        "description": "2024 380TSI Long Yao Edition"
    },
    {
        "id": "e68ee6ad-1d86-49cf-b746-254ef4901d90",
        "link": "/market/1006184-info",
        "image_url": "https://pic1.chehang168.com/202209/f316a0882e5f11eda3a800163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Atlas Cross Sport",
        "price": "EXW $3*,116",
        "description": "2024 380TSI Полный привод Longteng Edition"
    },
    {
        "id": "4e7267d9-a26f-4f71-8389-a7091d897f05",
        "link": "/market/1006185-info",
        "image_url": "https://pic1.chehang168.com/202209/f316a0882e5f11eda3a800163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Atlas Cross Sport",
        "price": "EXW $4*,055",
        "description": "2024 380TSI Полный привод Longxiang Edition"
    },
    {
        "id": "5737b4c1-cc9e-42df-91d2-6ad337204a9d",
        "link": "/market/1006186-info",
        "image_url": "https://pic1.chehang168.com/202210/49e0cc2846ec11ed9c6c00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen Teramont X",
        "price": "EXW $3*,280",
        "description": "2024 380TSI Полный привод Longxiang Edition"
    },
    {
        "id": "3aefb453-571e-4b37-80a2-437bcaf2499a",
        "link": "/market/1006187-info",
        "image_url": "https://pic1.chehang168.com/202308/c8a2f1be350a11ee9ea100163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen New Lavida",
        "price": "EXW $1*,482",
        "description": "2024 модели 1,5 л Автоматический легко"
    },
    {
        "id": "e924a135-8551-4f81-9791-4a924ddd9da3",
        "link": "/market/1006188-info",
        "image_url": "https://pic1.chehang168.com/202308/c8a2f1be350a11ee9ea100163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen New Lavida",
        "price": "EXW $1*,870",
        "description": "2024 1,5 л Автоматический пять миллионов версий"
    },
    {
        "id": "5c6c8072-852e-4a98-ae93-4d5e0dcdd33a",
        "link": "/market/1006189-info",
        "image_url": "https://pic1.chehang168.com/202308/c8a2f1be350a11ee9ea100163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen New Lavida",
        "price": "EXW $1*,980",
        "description": "2024 300TSI DSG полная версия"
    },
    {
        "id": "abb97a2a-ba6e-468a-bbb3-6377ff21098a",
        "link": "/market/1006190-info",
        "image_url": "https://pic1.chehang168.com/202204/d0078b56bfc011ecb8ce00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz Уитинг",
        "price": "EXW $3*,300",
        "description": "Weiting 2023 2.0T элитное 7-местный"
    },
    {
        "id": "56f3f925-2239-4092-ae4c-5107312e6e39",
        "link": "/market/1006191-info",
        "image_url": "https://pic1.chehang168.com/202307/26a4d6862d2e11eebc5a00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Haval DaGou",
        "price": "EXW $1*,713",
        "description": "Dargo 2024 1.5T DCT Labrador"
    },
    {
        "id": "5d8e6f8c-9142-4a81-8b52-3a5c33b19cc6",
        "link": "/market/1006192-info",
        "image_url": "https://pic1.chehang168.com/202404/997f87e770a2b2b74a7130c1d2c698b3.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Haval M6",
        "price": "EXW $1*,273",
        "description": "2024 модели PLUS 1.5T DCT арахис хорошая автомобильная версия"
    },
    {
        "id": "a251ceb3-58da-4790-9e4c-c88f6e4cbb96",
        "link": "/market/1006193-info",
        "image_url": "https://pic1.chehang168.com/202112/7bf15108677f11ec9a8500163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Haval Красный кролик Хавер",
        "price": "EXW $1*,450",
        "description": "Chitu(Red Rabbit) 2023 1.5T динамический тип"
    },
    {
        "id": "1eefb3bf-b24d-47e4-889b-a6478971e639",
        "link": "/market/1006194-info",
        "image_url": "https://pic1.chehang168.com/202308/c8a2f1be350a11ee9ea100163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen New Lavida",
        "price": "EXW $1*,233",
        "description": "2023 новых 1,5 л Автоматический новое желание"
    },
    {
        "id": "fb5af828-b3fb-4e48-bbda-df56c68af6ff",
        "link": "/market/1006195-info",
        "image_url": "https://pic1.chehang168.com/202308/c8a2f1be350a11ee9ea100163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen New Lavida",
        "price": "EXW $9,*84",
        "description": "2023 новые 1,5 л Автоматический Xinyi Edition"
    },
    {
        "id": "67835159-e6f7-4910-9b7b-0f7fb380f94e",
        "link": "/market/1006196-info",
        "image_url": "https://pic1.chehang168.com/202112/f826ce4067a411ecab3100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Haval Shenshou(Mythical Beast)",
        "price": "EXW $1*,861",
        "description": "2023 1.5T умный воротник DHT"
    },
    {
        "id": "6a522e81-ba18-42dc-93c0-904f88610f16",
        "link": "/market/1006197-info",
        "image_url": "https://pic1.chehang168.com/202308/c8a2f1be350a11ee9ea100163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volkswagen New Lavida",
        "price": "EXW $9,*42",
        "description": "2023 новые 1,5 л Ручной Xinyi Edition"
    },
    {
        "id": "d7d24896-fd80-49f6-a126-c7f25fc8573c",
        "link": "/market/1006198-info",
        "image_url": "https://pic1.chehang168.com/202204/0b759d52c13511ecbdc700163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 300",
        "price": "EXW $2*,762",
        "description": "GreatWall  2024 2.0T Challenger"
    },
    {
        "id": "1dfbebc6-bcab-4f22-9a39-3e659615816b",
        "link": "/market/1006199-info",
        "image_url": "https://pic1.chehang168.com/202204/0b759d52c13511ecbdc700163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 300",
        "price": "EXW $3*,509",
        "description": "GreatWall  2024 2.0T Traveler"
    },
    {
        "id": "72bb43ed-e5b2-40f2-80bd-0c443ac07a9a",
        "link": "/market/1006200-info",
        "image_url": "https://pic1.chehang168.com/202305/078373d4f93a11eda5ea00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hongqi HS5",
        "price": "EXW $2*,826",
        "description": "2023 2 T флажок воротник Pro Edition"
    },
    {
        "id": "9740f865-8435-41fc-a66f-8d1236f89e53",
        "link": "/market/1006201-info",
        "image_url": "https://pic1.chehang168.com/202310/37032f426ccf11ee9b0f00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 400 новая энергия",
        "price": "EXW $3*,061",
        "description": "400 New Energy 2024 Hi4-T City Edition"
    },
    {
        "id": "044f4600-c08a-4f32-8b3b-082e275cdd03",
        "link": "/market/1006202-info",
        "image_url": "https://pic1.chehang168.com/202204/7133d582c13511ec954b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 500",
        "price": "EXW $4*,745",
        "description": "GreatWall TANK 500 2023 3.0T Business Dengfeng 7-Seats"
    },
    {
        "id": "5c13ef5c-f5b5-47c6-b248-d7845a265952",
        "link": "/market/1006203-info",
        "image_url": "https://pic1.chehang168.com/202204/7133d582c13511ec954b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 500",
        "price": "EXW $4*,410",
        "description": "GreatWall TANK 500 2023 3.0T Sport Zaojing 5-Seats"
    },
    {
        "id": "1e8fb245-d673-481e-a70e-4da6ebc9391b",
        "link": "/market/1006204-info",
        "image_url": "https://pic1.chehang168.com/202204/7133d582c13511ec954b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 500",
        "price": "EXW $4*,410",
        "description": "GreatWall TANK 500 2023 3.0T Sport Zaojing 7-Seats"
    },
    {
        "id": "a6cd9bc1-ee58-4943-b0c9-b6c3d6c4679b",
        "link": "/market/1006205-info",
        "image_url": "https://pic1.chehang168.com/202204/d0078b56bfc011ecb8ce00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz Уитинг",
        "price": "EXW $5*,900",
        "description": "Weiting 2024 2.0T бизнес-версия 9 мест"
    },
    {
        "id": "b945608e-3e9d-4b78-82c7-74a33c44aeb5",
        "link": "/market/1006206-info",
        "image_url": "https://pic1.chehang168.com/202402/722e308cf2cdc55b46b93bc974e7d4d9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 700 новая энергия",
        "price": "EXW $5*,612",
        "description": "2024 Hi4-T экстремальная версия"
    },
    {
        "id": "72aac1ac-223f-45ca-ae59-b1f14fa70a95",
        "link": "/market/1006207-info",
        "image_url": "https://pic1.chehang168.com/202402/722e308cf2cdc55b46b93bc974e7d4d9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tank 700 новая энергия",
        "price": "EXW $9*,807",
        "description": "700 New Energy 2024 Hi4-T дебютирует в ограниченном выпуске"
    },
    {
        "id": "bfe23534-3704-4ab3-ae6e-53e84a4a50dc",
        "link": "/market/1006208-info",
        "image_url": "https://pic1.chehang168.com/202308/2b43f84847a511ee9ef800163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hongqi H5",
        "price": "EXW $1*,196",
        "description": "2024 1.5T DCT Zhilian флаг рифма версия"
    },
    {
        "id": "992e62b3-0658-4bda-87a3-495f00d96576",
        "link": "/market/1006209-info",
        "image_url": "https://pic1.chehang168.com/202310/6943766068e211eebd2c00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tesla Model Y",
        "price": "EXW $3*,716",
        "description": "Модель Y 2024 длинная версия полного привода"
    },
    {
        "id": "139000f1-b59f-46d5-9400-b9abef8628e5",
        "link": "/market/1006210-info",
        "image_url": "https://pic1.chehang168.com/202310/6943766068e211eebd2c00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tesla Model Y",
        "price": "EXW $3*,537",
        "description": "2024 версии заднего привода"
    },
    {
        "id": "2b3e1301-ffdc-44a0-8884-cb264b60a218",
        "link": "/market/1006211-info",
        "image_url": "https://pic1.chehang168.com/202409/88af77d67ac06367b4739c9dd2eca7b9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz V класс",
        "price": "EXW $5*,250",
        "description": "V-Class 2022 V 260 пилотная версия"
    },
    {
        "id": "0be5931b-6753-48cb-afce-d5dfa2809a5d",
        "link": "/market/1006212-info",
        "image_url": "https://pic1.chehang168.com/202406/8f399d8c1d2ee511b3f5236dbce61301.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tesla Model 3",
        "price": "EXW $3*,264",
        "description": "2023 версия заднего привода"
    },
    {
        "id": "e5eb586c-ee96-44a5-a3c7-8f3004cb44f2",
        "link": "/market/1006213-info",
        "image_url": "https://pic1.chehang168.com/202405/b9fa5061f2410b8f45250ebaddbddce4.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hongqi H9",
        "price": "EXW $4*,722",
        "description": "2024 флаг 2.0T"
    },
    {
        "id": "1d4b1ed4-d746-45fb-af3e-713c88be48ea",
        "link": "/market/1006214-info",
        "image_url": "https://pic1.chehang168.com/202406/8f399d8c1d2ee511b3f5236dbce61301.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Tesla Model 3",
        "price": "EXW $3*,316",
        "description": "Модель 3 2023 длинная версия полного привода"
    },
    {
        "id": "814c380e-4e3d-4b76-864c-068f83f8b346",
        "link": "/market/1006216-info",
        "image_url": "https://pic1.chehang168.com/202208/5a5898e4283111edb21900163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Denza D9",
        "price": "EXW $5*,841",
        "description": "2024 модели DM-i 980 Полный привод"
    },
    {
        "id": "bf39235d-4fdf-459d-b998-6b7e4167e2d4",
        "link": "/market/1006217-info",
        "image_url": "https://pic1.chehang168.com/202409/88af77d67ac06367b4739c9dd2eca7b9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz V класс",
        "price": "EXW $5*,050",
        "description": "V-Class 2022 V 260 пилотный Люк педаль"
    },
    {
        "id": "66bed0fe-3816-487e-9b6b-977c32fb96d5",
        "link": "/market/1006218-info",
        "image_url": "https://pic1.chehang168.com/202305/6d9d5852ffa111edb53200163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volvo XC60",
        "price": "EXW $4*,486",
        "description": "2025 B5 Полный привод Zhiyuan Sport Edition"
    },
    {
        "id": "3af58dd7-8f20-4253-915e-a0814ed95b62",
        "link": "/market/1006219-info",
        "image_url": "https://pic1.chehang168.com/202106/8b8fa942d34c11eb9e0b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Hongqi E-QM5",
        "price": "EXW $1*,761",
        "description": "2024 модели 560km PLUS"
    },
    {
        "id": "41f223e1-baac-424d-968e-0d30ae74137d",
        "link": "/market/1006220-info",
        "image_url": "https://pic1.chehang168.com/202307/d2f740d827a511ee8a1200163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volvo XC40",
        "price": "EXW $3*,701",
        "description": "2024 B4 4WD Zhiyuan Sport"
    },
    {
        "id": "b88c65f8-3433-410f-97c6-69621ed2c73e",
        "link": "/market/1006221-info",
        "image_url": "https://pic1.chehang168.com/202009/90ee8a3ef70111eabdd900163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volvo S60",
        "price": "EXW $3*,644",
        "description": "2025 B4 Zhiyuan Sport Edition"
    },
    {
        "id": "ed77dd38-0ff3-4ef2-b6e9-93c9905ab639",
        "link": "/market/1006222-info",
        "image_url": "https://pic1.chehang168.com/202103/5548f7ac824411eb95c300163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Volvo S90",
        "price": "EXW $4*,678",
        "description": "2025 B5 Zhiyuan Deluxe Edition"
    },
    {
        "id": "57ff5139-407e-4204-82d3-12c367f1bd3b",
        "link": "/market/1006223-info",
        "image_url": "https://pic1.chehang168.com/202409/88af77d67ac06367b4739c9dd2eca7b9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz V класс",
        "price": "EXW $6*,220",
        "description": "V-Class 2022 V 260 Premth Edition"
    },
    {
        "id": "5fe387e8-e7ef-4f95-8dc1-719285df158c",
        "link": "/market/1006224-info",
        "image_url": "https://pic1.chehang168.com/202204/96f3e0e6c07c11eca82300163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Equinox",
        "price": "EXW $1*,200",
        "description": "2023 1.5T Drive"
    },
    {
        "id": "8c9905b5-6e1b-439d-be69-c3d932b0685d",
        "link": "/market/1006225-info",
        "image_url": "https://pic1.chehang168.com/202405/3e85dd9514e665356ac401d1d9767190.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Equinox Plus",
        "price": "EXW $2*,054",
        "description": "2024 102 км RS до версии"
    },
    {
        "id": "daac7966-3c8a-4fab-adb0-1656d1e921eb",
        "link": "/market/1006226-info",
        "image_url": "https://pic1.chehang168.com/202402/87eb156846ed4624fabb8dbce1b42812.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Zeekr 001",
        "price": "EXW $3*,746",
        "description": "2025 ME Edition 100kWh Полный привод"
    },
    {
        "id": "fa7aa55a-3d87-4717-8ae6-e894284681bd",
        "link": "/market/1006227-info",
        "image_url": "https://pic1.chehang168.com/202405/3e85dd9514e665356ac401d1d9767190.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Chevrolet Equinox Plus",
        "price": "EXW $2*,791",
        "description": "2024 модели 102km RS Ultimate"
    },
    {
        "id": "9c120dcc-edbe-4c31-aaa9-94c0bb03f845",
        "link": "/market/1006228-info",
        "image_url": "https://pic1.chehang168.com/202409/88af77d67ac06367b4739c9dd2eca7b9.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz V класс",
        "price": "EXW $7*,400",
        "description": "V-Class 2022 V 260 L Длинная колесная база Уважаемые издания"
    },
    {
        "id": "60e5d5c2-05e8-48ff-93bd-4a652e2f930e",
        "link": "/market/1006229-info",
        "image_url": "https://pic1.chehang168.com/202211/2313439c5b4a11ed9c4500163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Zeekr 009",
        "price": "EXW $6*,261",
        "description": "2024 семиместных проходов Полный привод 140kWh"
    },
    {
        "id": "bc6931cb-bdbb-4dc9-aab2-0a2389116d22",
        "link": "/market/1006230-info",
        "image_url": "https://pic1.chehang168.com/202312/2999a82aa52f11eeb10200163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Zeekr Полюс 007",
        "price": "EXW $3*,021",
        "description": "007 2025 лет с длинным задним драйвером с умным приводом 100kWh"
    },
    {
        "id": "9bc36585-3cdb-4d52-a634-96f390e1dd1f",
        "link": "/market/1006231-info",
        "image_url": "https://pic1.chehang168.com/202401/603e99f8b4f211eeb61800163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Zeekr X",
        "price": "EXW $2*,246",
        "description": "2024 четырехместный задний привод"
    },
    {
        "id": "d4c68076-0408-454e-9ede-ed2c0766b606",
        "link": "/market/1006232-info",
        "image_url": "https://pic1.chehang168.com/202407/68c87c70688a41733750d3a3e7b1b237.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Geely Emgrand",
        "price": "EXW $1*,383",
        "description": "2025 1,5 л 4-го поколения CVT Dragon Edition"
    },
    {
        "id": "e3e7ae03-c1dc-4527-9453-c3c5d8d8ca23",
        "link": "/market/1006233-info",
        "image_url": "https://pic1.chehang168.com/202210/35104dfe56ab11eda1c100163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Geely Altas L",
        "price": "EXW $1*,933",
        "description": "2024 1.5TD DCT Ultimate"
    },
    {
        "id": "dcfa3b75-100e-4905-a860-725241e95de4",
        "link": "/market/1006234-info",
        "image_url": "https://pic1.chehang168.com/202403/59a126a9f546bc722071e58fb924b7e1.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Geely Binrui",
        "price": "EXW $1*,231",
        "description": "2024  COOL 1.5T DCT Champion Edition"
    },
    {
        "id": "bb05c0cc-7e77-4c66-8ac0-f57d21cd6dbe",
        "link": "/market/1006235-info",
        "image_url": "https://pic1.chehang168.com/202308/d319915a416411ee826400163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Полюсный камень 01",
        "price": "EXW $3*,019",
        "description": "Polestones 01 2024 универсальный 7-местный Стандартный срок службы батареи"
    },
    {
        "id": "f58240a0-8697-43ef-98f1-c5d176a6f6eb",
        "link": "/market/1006236-info",
        "image_url": "https://pic1.chehang168.com/202310/5c33dad468ea11ee8b1000163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour путешественники",
        "price": "EXW $2*,950",
        "description": "Traveler 2024 модели 2.0T Полный привод Helano PRO"
    },
    {
        "id": "3bc4e5b1-e0d3-407b-b94c-8454b83785da",
        "link": "/market/1006237-info",
        "image_url": "https://pic1.chehang168.com/202404/057ebf695fbf6bd50d775055e65b9d24.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море T2",
        "price": "EXW $2*,701",
        "description": "Mountain T2 2024 C-DM 129KM Wild Edition"
    },
    {
        "id": "376bf9fc-22e3-4376-9454-11ccd42dad84",
        "link": "/market/1006238-info",
        "image_url": "https://pic1.chehang168.com/202404/057ebf695fbf6bd50d775055e65b9d24.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море T2",
        "price": "EXW $2*,088",
        "description": "Shanhai T2 2024 C-DM 129KM Linye Edition"
    },
    {
        "id": "25e2f2f5-cad1-466c-911a-cef7747ad487",
        "link": "/market/1006239-info",
        "image_url": "https://pic1.chehang168.com/202311/319ddbf0846d11eebb5b00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море L9",
        "price": "EXW $2*,204",
        "description": "Mountain L9 2024 1.5TD 2DHT Air Light 5-местный"
    },
    {
        "id": "7d91a0bc-f842-48ab-9a52-20d31576435c",
        "link": "/market/1006240-info",
        "image_url": "https://pic1.chehang168.com/202311/319ddbf0846d11eebb5b00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море L9",
        "price": "EXW $2*,007",
        "description": "Mountain L9 2024 1.5TD 2DHT Pro 5-местный"
    },
    {
        "id": "c51b65bb-26ab-4d8f-bc69-194117ab477e",
        "link": "/market/1006241-info",
        "image_url": "https://pic1.chehang168.com/202311/319ddbf0846d11eebb5b00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour горы и море L9",
        "price": "EXW $2*,256",
        "description": "Mountain L9 2024 1.5TD 2DHT Max 5-местный"
    },
    {
        "id": "b5fce984-2493-4929-aa48-d6967cce76bf",
        "link": "/market/1006242-info",
        "image_url": "https://pic1.chehang168.com/202209/d1b6c006341011eda59300163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour Dashing i-DM",
        "price": "EXW $2*,955",
        "description": "Dasheng i-DM 2023 1.5T DHT Lightning 01"
    },
    {
        "id": "2a93b7e4-4adb-48dc-9464-4fb0f365adbe",
        "link": "/market/1006243-info",
        "image_url": "https://pic1.chehang168.com/202209/d1b6c006341011eda59300163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour Dashing i-DM",
        "price": "EXW $2*,343",
        "description": "Dasheng i-DM 2023 1.5T DHT Lightning 02"
    },
    {
        "id": "60e8e50b-7a84-47eb-9f80-77202aed8ba2",
        "link": "/market/1006244-info",
        "image_url": "https://pic1.chehang168.com/202409/04bea2c12f5fb60cc3a73c201638b9cf.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour Dashing",
        "price": "EXW $1*,216",
        "description": "2024 модели 1.5T DCT Star Yao PRO"
    },
    {
        "id": "dff6d198-1616-47fc-ad4c-046b8fd74542",
        "link": "/market/1006245-info",
        "image_url": "https://pic1.chehang168.com/202409/04bea2c12f5fb60cc3a73c201638b9cf.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour Dashing",
        "price": "EXW $1*,158",
        "description": "2024 1.5T DCT Dragon Edition PRO"
    },
    {
        "id": "cfc9502f-3bf2-4b83-ac67-615219d99778",
        "link": "/market/1006246-info",
        "image_url": "https://pic1.chehang168.com/202211/97f1fa485f3511edb5f400163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PLUS",
        "price": "EXW $1*,019",
        "description": "2024 модели 1,5 T Ручной бунгало 5"
    },
    {
        "id": "04466f99-b905-4093-a41c-9979cb999ce0",
        "link": "/market/1006247-info",
        "image_url": "https://pic1.chehang168.com/202211/97f1fa485f3511edb5f400163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PLUS",
        "price": "EXW $1*,713",
        "description": "2024 модели 1.6TD Ручной бунгало PRO 5 мест"
    },
    {
        "id": "7e2780c1-99d9-4b62-978e-05f287259f3c",
        "link": "/market/1006248-info",
        "image_url": "https://pic1.chehang168.com/202403/4eaf1321ca6203a13d8a565ee4510248.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PRO",
        "price": "EXW $1*,655",
        "description": "2024 1.6T DCT элитная версия 5-местный"
    },
    {
        "id": "28a6ac1e-8cd9-4758-9d21-62e5f9dd6a58",
        "link": "/market/1006249-info",
        "image_url": "https://pic1.chehang168.com/202403/4eaf1321ca6203a13d8a565ee4510248.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PRO",
        "price": "EXW $1*,903",
        "description": "2024 1.6T DCT Deluxe Edition 5-местный"
    },
    {
        "id": "2d3df59d-a7cd-478f-a339-e132faae3d83",
        "link": "/market/1006250-info",
        "image_url": "https://pic1.chehang168.com/202403/4eaf1321ca6203a13d8a565ee4510248.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Jetour X90 PRO",
        "price": "EXW $1*,320",
        "description": "2024 1.6T DCT Deluxe Edition 7-местный"
    },
    {
        "id": "525bc509-d655-49fb-b8e2-cd904cc07a55",
        "link": "/market/1006251-info",
        "image_url": "https://pic1.chehang168.com/202307/ae9eb5f025e711eea98700163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz EQE SUV",
        "price": "EXW $4*,200",
        "description": "2024 модели 350 4MATIC Pioneer Edition"
    },
    {
        "id": "393e3410-2b18-46b1-87f8-2b1e433c4fad",
        "link": "/market/1006252-info",
        "image_url": "https://pic1.chehang168.com/202307/ae9eb5f025e711eea98700163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz EQE SUV",
        "price": "EXW $5*,250",
        "description": "2024 модели 500 4MATIC Deluxe Edition"
    },
    {
        "id": "81868390-ee12-4869-9f3b-1f286e55bf55",
        "link": "/market/1006253-info",
        "image_url": "https://pic1.chehang168.com/202210/3cdfef7c537611ed9c4b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Рок 03",
        "price": "EXW $1*,473",
        "description": "03 2025 1.5TD DCT Чемпион Pro"
    },
    {
        "id": "5a4246f9-2b58-4a18-9058-e41cd81b7eba",
        "link": "/market/1006254-info",
        "image_url": "https://pic1.chehang168.com/202210/3cdfef7c537611ed9c4b00163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Рок 03",
        "price": "EXW $1*,832",
        "description": "03 2025 2.0TD DCT Чемпион Pro"
    },
    {
        "id": "4ca3377b-3b8b-4c55-9fb8-609067362282",
        "link": "/market/1006255-info",
        "image_url": "https://pic1.chehang168.com/202111/c58fa0684b5e11ec9d7900163f00df7e.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Mercedes-Benz Benz EQB",
        "price": "EXW $2*,400",
        "description": "2025 EQB 260"
    },
    {
        "id": "b514e7b2-1213-4b24-8ded-5da1be00c42b",
        "link": "/market/1006256-info",
        "image_url": "https://pic1.chehang168.com/202409/4ce373f6c91e7e716b3ea9aaeb2fa015.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO 06",
        "price": "EXW $1*,255",
        "description": "2023 Remix 1.5T Pro"
    },
    {
        "id": "3bf913cf-988c-45ad-86e4-ed8209a2b0d0",
        "link": "/market/1006257-info",
        "image_url": "https://pic1.chehang168.com/202406/f15c7c397f49cdc5a7d52273d784e81c.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Buick Анкави",
        "price": "EXW $2*,450",
        "description": "Envision 2024 модели Envision Plus 28T Полный привод эксклюзивная версия"
    },
    {
        "id": "9d805696-f43a-47b1-81a8-11bc0da59c62",
        "link": "/market/1006258-info",
        "image_url": "https://pic1.chehang168.com/202409/4ce373f6c91e7e716b3ea9aaeb2fa015.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO 06",
        "price": "EXW $1*,058",
        "description": "2023 модели Remix 1.5T Яо Halo"
    },
    {
        "id": "f641b35d-6986-4591-a93d-c7bc7450f279",
        "link": "/market/1006259-info",
        "image_url": "https://pic1.chehang168.com/202207/ea37bbf40cc811eda25e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Воротник 01",
        "price": "EXW $1*,693",
        "description": "01 2024 модели 2.0TD 2WD Global Edition"
    },
    {
        "id": "14e6b96b-9c97-4795-9132-e5fb17fde9e2",
        "link": "/market/1006260-info",
        "image_url": "https://pic1.chehang168.com/202207/ea37bbf40cc811eda25e00163e084933.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Воротник 01",
        "price": "EXW $2*,410",
        "description": "01 2024 модели 2.0TD Полный привод Halo"
    },
    {
        "id": "03752d7e-d6de-45bf-b54b-08688c3c607b",
        "link": "/market/1006261-info",
        "image_url": "https://pic1.chehang168.com/202409/9f44387db1e4cb3ef65af9607e9dcd6f.png?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "LYNK&CO Z10",
        "price": "EXW $4*,167",
        "description": "2024 модель 95kWh 702 км Полный привод Умный драйв Ultra"
    },
    {
        "id": "65a0ee71-228e-4271-9d3b-7eac73967ab3",
        "link": "/market/1006443-info",
        "image_url": "https://pic.carmucn.com/202410/66dc77d70a7685aa9a5fc7021bf04ac0.jpg?x-oss-process=image/resize,m_fill,w_780,h_520,limit_0/quality,q_80",
        "title": "Avatr 07",
        "price": "EXW $3*,660",
        "description": "2024 Ultra увеличенная версия Полный привод"
    }
]

export default cars;