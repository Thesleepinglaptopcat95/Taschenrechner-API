//Server
// Express Server

const express = require('express');
const app = express();

// Es tut mir Leid, dass der Code solange ist, aber der Code funktioniert nur so. Ein import der einzelnen Komponenten war nicht möglich.


///Addition Zahlen und Terme
function addition(x, z) {
  return x + z;
}; 


// API Addition
app.get('/addition/:x/:z', (req, res) => {
  const x = parseFloat(req.params.x);
  const z = parseFloat(req.params.z);
  const result = addition(x, z);
  res.json({ result });
});

///Subtraktion Zahlen und Terme

function subtraction(c, d) {
 return c - d;
}; 

/// API Subtraktion 
app.get('/subtraction/:c/:d', (req, res) => {
const c = parseFloat(req.params.c);
const d = parseFloat(req.params.d);
const result = subtraction(c, d);
res.json({ result });
});

///Multiplikation von Zahlen und Termen
function multiplikation(x, z) {
  return x * z;
}; 

//API Multiplikation
app.get('/multiplikation/:x/:z', (req, res) => {
  const x = req.params.x;
  const z = req.params.z;

  const result = multiplikation(x, z);

  res.send({
      result
  });
});

//Dividieren von Zahlen und Termen

function division(x, z) 
{ return x / z; 
};


// API Division 
app.get('/division/:x/:z', (req, res) => { 
  const x = parseFloat(req.params.x);
  const z = parseFloat(req.params.z);
  const result = division(x, z);
  res.json({ result });
});

// Definition einer Funktion für Addition von Vektoren
function vectorAdd(vector1, vector2) {
  // Erstellen eines neuen Vektors
  let resultVector = [];

  // Prüfen, ob beide Vektoren die gleiche Länge haben
  if (vector1.length !== vector2.length) {
    return 'Die Vektoren haben nicht die gleiche Anzahl an Komponenten!';
  };
  
  // Addieren der Elemente der beiden Vektoren und speichern des Ergebnisses im neuen Vektor
  for (let i = 0; i < vector1.length; i++) {
    resultVector.push(Number(vector1[i]) + Number(vector2[i]));
    // Gib das Ergebnis zurück
  return resultVector;
  };
};

 //API Vektoraddition 

  app.get('/vectorAdd', (req, res) => {
    const { vector1, vector2 } = req.query;
    const resultVector = vectorAdd(vector1, vector2);
    res.status(200).json({ vectorAddResult: resultVector }); });

//Dies ist eine Funktion, mit der die Fakultät einer Zahl berechnet werden kann
function fakultaet(n) {
  let result = 1;
  //Für jede Zahl von n bis 1 wird die Fakultät berechnet
  for (let i = n; i > 0; i--) {
    result *= i;
  };
  //Gib das Ergebnis zurück
  return result;
};

//Dies ist eine API, mit der die Fakultät einer Zahl berechnet werden kann
app.get('/fakultaet/:n', function(req, res){
  let n = req.params.n;
  let result = fakultaet(n);
  res.json({
    'result': result
  });
});

// Funktion zur Berechnung des Kreuzproduktes
function Kreuzprodukt(vec1, vec2) {
  let x = vec1[1] * vec2[2] - vec1[2] * vec2[1];
  let y = vec1[2] * vec2[0] - vec1[0] * vec2[2];
  let z = vec1[0] * vec2[1] - vec1[1] * vec2[0];

  return [x, y, z];
};

// Eingabe um das Kreuzprodukt heraus zu finden
//let vec1 = [x1, y1, z1]; 
//let vec2 = [x2, y2, z2]; 
//let crossProduct = Kreuzprodukt(vec1, vec2); 
//console.log(crossProduct);

// API für Kreuzprodukte
app.get('/Kreuzprodukt', (req, res) => {
  const vec1 = req.query.vec1;
  const vec2 = req.query.vec2;

  if (!vec1 || !vec2) {
    return res.status(400).send({ error: 'Kreuzprodukt nicht ermittelbar' });
  }

  const result = Kreuzprodukt(vec1, vec2);

  return res.status(200).send({ result });
});

//Funktion für Potenzrechnung
function Potenzrechnung(basis, exponent) {
  let result = 1;
  if (exponent > 0) {
    for (let i = 0; i < exponent; i++) {
      result *= basis;
    }
  } else if (exponent < 0) {
    for (let i = 0; i > exponent; i--) {
      result /= basis;
    }
  }
  console.log(result);
} 

// API Potenzrechnung
app.get('/api/potenzrechnung', (req, res) => {
  const { basis, exponent } = req.query;
  const result = Potenzrechnung(basis, exponent);
  res.json({
    result,
  });
});  

//Fake API zum löschen der Funktion noch nicht vervollständigt
app.post('/delete', (req, res) => {
  // Code, um die Funktion zu löschen
  res.send('Rechenoperation wurde gelöscht');
});

// Server starten
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Taschenrechner ist bereit`));
