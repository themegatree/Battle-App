Client | | Browser | | Server
---|--- |--- | --- | ---
|	Input: [name1] [name2]	 ------------>	POST Request	|
|				|
|	Render opponent HP	<----------	HTML file	|
|				|
|	Input Attack	 --------->	Post [Attack]	|
|	Render HTML: Confirm hit	<----------	HTML file	|
|				|
|	Input Attack P2 10HP	 -------->	POST Request	|
|				|
|	Input [end turn]	 --------->	POST Request	|
|	Render: Other players Screen	<-----------	HTML file	|
|				|
|	Render turn player HP	<----------	HTML file	|
|				|
|	Input Attack	 --------->	Post [Attack]	|
|	Render HTML: Confirm hit	<----------	HTML file	|
|				|
|	Input Attack P1 10HP	 -------->	POST Request	|
|				|
|	Render: K.O	<---------	HMTL file	|
