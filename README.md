# Taschenrechner-API
Ein Taschenrechner der über eine API läuft und die Ergebnisse mit der API ausliefert
Es ist aber erstmal nur die Alpha lite.

Aufbau der Software-Architektur

Die Software-Architektur besteht aus dem Code mit den Formeln der Rechenoperationen, dem Server, der API und dem Frontend, wenn man dieses nutzt. Oder dem Browser als Client.


Der Server

Der Server läuft über Express. Um diesen Aufjrufen zu können muss man im Terminal von VS-Code npm install express eingeben. Dadurch werden alle Komponenten für den Server installiert. Sobald man den Code über „ausführen“ startet. Stellt der Express Server die Daten für den Taschenrechner lokal bereit.


Der Code für die Formeln für die Rechenoperationen

Durch die Formeln, können verschiedene Rechenoperationen ausgeführt werden. Die Formeln sind in der Programmierspracje Javascript geschrieben. Sie liegen im Code 	als Funktion vor. Die Funktion besteht bei den Grundrechenarten für einfache Zahlen aus 2 Variablen und einem Operator. Bei den Funktionen für die Subtraktion, Addition, Division und Multiplikation nimmt die Funktion zwei numerische Parameter auf (x und z), führt jeweils die Rechenoperation auf den Werten aus und gibt das Ergebnis zurück. Bei der Funktion für das Vektor addieren, werden die zwei Vektoren als Parameter erwartet. Die Funktion überprüft zuerst, ob die beiden Vektoren die gleiche Länge haben. Wenn dies nicht der Fall ist, wird eine Fehlermeldung zurückgegeben. Wenn die Vektoren die gleiche Länge haben, führt die Funktion eine Schleife durch, in der jedes Element der beiden Vektoren addiert wird und das Ergebnis in einem neuen Vektor gespeichert wird. Am Ende wird der neue Vektor, der das Ergebnis der Addition enthält, zurückgegeben. Bei der Funktion der Fakultät wird zunächst eine Variable mit dem Namen result deklariert und ihr der Wert 1 zugewiesen. Dies ist der Basiswert eines Faktors, da der Faktor 0 1 ist. Anschließend verwendet der Code eine for-Schleife, um von n nach unten zu 1 zu iterieren. Bei der Funktion des Kreuzprodukts werden die Komponenten der beiden Vektoren miteinander multipliziert und die Ergebnisse addiert. Die Komponenten des ersten Vektors werden dazu mit den Komponenten des zweiten Vektors multipliziert und die Ergebnisse addiert. Dieser Vorgang wird für jede Komponente des Vektors durchgeführt. Das Ergebnis ist ein Vektor mit den Komponenten x, y und z, die das Kreuzprodukt der beiden Vektoren darstellen. Bei der  Funktion für die Berechnung der Potenz sind zwei Parameter erforderlich, eine Basis und einen Exponenten. Die Funktion setzt dann eine Variable namens result auf 1 und prüft dann, ob der Exponent größer als 0 ist. Wenn dies der Fall ist, durchläuft die Funktion die vom Exponenten angegebene Anzahl von Malen und multipliziert das Ergebnis jedes Mal mit der Basis. Wenn der Exponent kleiner als 0 ist, durchläuft die Funktion die vom Exponenten angegebene Häufigkeit, wobei das Ergebnis jedes Mal durch die Basis dividiert wird. Abschließend wird das Ergebnis auf der Konsole ausgedruckt.

Die APIs

Hier werden die APIS als API-Endpunkt für Kommunikation zwischen den Backend 		mit dem Formeln und dem Frontend bzw. Browser. Die app.get()-Methode wird verwendet, um einen Endpunkt für die Anwendung zu definieren. Die Parameter x 		und z werden als Gleitkommazahlen analysiert und an eine Additionsfunktion übergeben, die den Additionsvorgang ausführt. Das Ergebnis der Addition wird dann als JSON-Objekt mit dem Schlüssel 'result' zurückgesendet.
Das selbe Verfahren wird auch für die Subtraktion, die Division und die Multiplikation verwendet.
Bei der Vektoraddition läuft es ähnlich ab, nur  das  der Vektoradditions-Algorithmus aufgerufen wird, um die zwei Vektoren zu addieren und die Summe der beiden Vektoren zu erhalten, und das Ergebnis wird dann im JSON-Format im Feld vectorAddResult zurückgegeben.
Bei der API für die Fakultät nimmt diese auch erst due Parameter entgegen und danach wird die Funktion fakultaet() verwendet, um die Fakultät der Zahl zu berechnen. Der Server gibt dann das Ergebnis zurück. Die API  für das Kreuzprodukt erwartet zur Brechnung des Kreuzproduktes zweier Vektoren als Parameter, die in den Query-Parametern "vec1" und "vec2" übergeben werden. Wenn die beiden Parameter nicht angegeben wurden, wird ein Fehlercode 400 an den Client zurückgegeben, der signalisiert, dass das Kreuzprodukt nicht ermittelbar ist. Ansonsten wird der eingegebene Vektoren in der Funktion "Kreuzprodukt" berechnet und das Ergebnis an den Client zurückgegeben. Die API für die Potenzrechnung verwendet die Express.js API, um eine Potenzrechnung zu implementieren. 
Der	Request enthält die Parameter "basis" und "exponent", die aus der Anfrage entnommen werden. Dann wird die Potenzrechnung-Funktion mit den beiden Parametern aufgerufen und das Ergebnis gespeichert. Am Ende wird das Ergebnis als JSON-Antwort an den Client gesendet.
Bei der fake api wird der Text "echenoperation wurde gelöscht" als Parameter über die API an den Client gesendet

Das Frontend/ Browser
Über das Frontend oder den Browser gibt der Benutzer seine gewünschte Rechenoperation ein und bekommt darüber auch das Ergebnis ausgespielt. Es dient als Client. Bei dem Frontend für die Addition, Subtraktion und Division werden per HTML zwei Felder mit Nummer 1 und 2 erzeugt und ein Button mit „Calculate“. Im Script verhindert der Event - Listener das Standard-Submit-Verhalten des Formulars und liest die Werte der Eingabefelder x und z aus. Dann wird die URL 	http://localhost:5000/subtraction/x/z mit den Werten von x und z erstellt und die aktuelle Seite auf diese URL geleitet. Der Event – Listener nimmt normalerweise 		Events bzw. Funktionen bei einer asynchronen Kommunikation entgegen. 


Betriebsanleitung der Taschenrechner-API mit Besipielen

  
Frontend – Anleitung für die Addition, Subtraktion und Multiplikation

Bei der Nummer werden die Zahlen eingetragen und mit Calculate wird das Ergebnis ausgegeben.
Genauso funktioniert es mit der Subtraktion und der Addition man muss nur die richtige HTML - Datei öffnen.


Funktionierende APIs

Basisaufruf:http://localhost:5000/.

http://localhost:5000/addition/:x/:z =>Addition
http://localhost:5000/subtraction/:x/:z => Subtraktion
http://localhost:5000/multiplikation/:x/:z => Multiplikatio
http://localhost:5000/division/:x/:z => Division

Um sich das Ergebnis für die Division zwei ganzer Zahlen anzeigt zu bekommen, schreibt man die zwei Zahlen an Stelle von dem "x" und dem "z". Die Links kann man einfach kopieren und im Browser einfügen. Den Server sollte man aber vorher gestartet haben. Für Addition, Subtraktion und Multiplikatio kann man das selbe machen.

Beispiel:
http://localhost:5000/division/10/5
{"result":2}

http://localhost:5000/fakultaet/:n => Fakultät

Um sich die Fakultät ausgeben zu lassen, schreibt man einfach die gewünschte Zahl an der Stelle von "n". 

Beispiel:
http://localhost:5000/fakultaet/8
{"result":40320}

http://localhost:5000/delete => Lösch API

Diesen Link kann man einfach übernehmen und schauen, was dieser ausgibt.


Nicht funktionierende APIs oder Features

http://localhost:5000/vectorAdd => Vector Addition

Hier funktioniert leider die API nicht, aber im Terminal von Visual Studio kann man die Vectoren angeben und dort werden sie dann addiert.

Beispiel: 
vector1 = [8, 5, 3]
vector2 = [2, 5, 6]
 und bekommt dann [2, 5, 6] raus.

 http://localhost:5000/Kreuzprodukt => Kreuzprodukt

Wenn man den Link abruft, zeigt dieser einen Error an, da keine Vectoren geben sind, aber auch im Link nicht eingefügt werden können.
Die Funktion ist leider noch sehr verbuggt.
Wenn man das Kreuzprodukt erfahren möchte, muss man direkt im Code selber in Zeile 126 und 127 die Vektoren eingeben und den Server neustarten. 

Feature gestrichen.

http://localhost:5000/api/potenzrechnung => Potenzrechnung

Liefert einen Wert aus, aber mehr auch nicht. Ebenso verbuggt. 
 
Feature gestrichen
