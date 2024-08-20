// export async function getCalles() {

//     const URL = `http://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/commons/calles`

//     try {

//         const response = await fetch(URL)
//         const data = response.json()

//         console.log(data)

//         return data.map((calle) => {
//             label: calle.descripcion;
//             id: calle.id
//         })

//     } catch (error) {
//         console.error("Fetch error: ", error)
//         throw error

//     }

// }

export let calles = [
    {
        "id": 1,
        "descripcion": "25 DE MAYO                    "
    },
    {
        "id": 2,
        "descripcion": "26 DE NOVIEMBRE               "
    },
    {
        "id": 3,
        "descripcion": "9 DE JULIO                    "
    },
    {
        "id": 4,
        "descripcion": "AGUIAR ADELA                  "
    },
    {
        "id": 5,
        "descripcion": "ALBERDI JUAN BAUTISTA         "
    },
    {
        "id": 6,
        "descripcion": "ALBERTI                       "
    },
    {
        "id": 7,
        "descripcion": "ALEM DR. LEANDRO N.           "
    },
    {
        "id": 8,
        "descripcion": "ALFERI ROBERTO                "
    },
    {
        "id": 9,
        "descripcion": "ALIGHIERI DANTE               "
    },
    {
        "id": 10,
        "descripcion": "ALVEAR                        "
    },
    {
        "id": 11,
        "descripcion": "AMEGHINO AVDA. FLORENTINO     "
    },
    {
        "id": 12,
        "descripcion": "ARENALES                      "
    },
    {
        "id": 13,
        "descripcion": "ARENAZA SALVADOR LINO         "
    },
    {
        "id": 14,
        "descripcion": "GHIONE JUAN JOSE              "
    },
    {
        "id": 15,
        "descripcion": "ASCASUBI HILARIO              "
    },
    {
        "id": 16,
        "descripcion": "LARRABURE AVDA. CNEL. D. A. DE"
    },
    {
        "id": 17,
        "descripcion": "ROCCA AVDA. ING. AGUSTIN      "
    },
    {
        "id": 18,
        "descripcion": "LAVEZZARI AVDA. FRANCISCO     "
    },
    {
        "id": 19,
        "descripcion": "BALBIN AVDA. DR. RICARDO      "
    },
    {
        "id": 20,
        "descripcion": "HARRICHABALET BERNARDO        "
    },
    {
        "id": 21,
        "descripcion": "EL ALAZAN                     "
    },
    {
        "id": 22,
        "descripcion": "EL APERO                      "
    },
    {
        "id": 23,
        "descripcion": "EL ARRIERO                    "
    },
    {
        "id": 24,
        "descripcion": "EL BOYERO                     "
    },
    {
        "id": 25,
        "descripcion": "EL CEIBO                      "
    },
    {
        "id": 26,
        "descripcion": "BALCARCE                      "
    },
    {
        "id": 27,
        "descripcion": "BARLARO VICTORIO              "
    },
    {
        "id": 28,
        "descripcion": "BARLETTA NICOLAS              "
    },
    {
        "id": 29,
        "descripcion": "BARNETCHE SANSON              "
    },
    {
        "id": 30,
        "descripcion": "BECERRA DR. MARTIN LUIS       "
    },
    {
        "id": 31,
        "descripcion": "BELGRANO GENERAL              "
    },
    {
        "id": 32,
        "descripcion": "BELLOMO AVDA. ANTONIO         "
    },
    {
        "id": 33,
        "descripcion": "BELTRAME ANSELMO              "
    },
    {
        "id": 34,
        "descripcion": "DOLCI JUAN                    "
    },
    {
        "id": 35,
        "descripcion": "BERGAMO                       "
    },
    {
        "id": 36,
        "descripcion": "BERTOLINI SANTIAGO            "
    },
    {
        "id": 37,
        "descripcion": "BERUTI                        "
    },
    {
        "id": 38,
        "descripcion": "BLANCO MATEO                  "
    },
    {
        "id": 39,
        "descripcion": "BRAVO SANDALIA                "
    },
    {
        "id": 40,
        "descripcion": "BROWN ALMIRANTE               "
    },
    {
        "id": 41,
        "descripcion": "CAPILLA DEL SEÑOR"
    },
    {
        "id": 42,
        "descripcion": "BUONAROTTI MICHEL ANGELO      "
    },
    {
        "id": 43,
        "descripcion": "BUSSO JORDAN                  "
    },
    {
        "id": 44,
        "descripcion": "GAVAZZI FAUSTO CAP. F.F.A.A.  "
    },
    {
        "id": 45,
        "descripcion": "CARHUE (PASAJE)               "
    },
    {
        "id": 46,
        "descripcion": "CAROSSA ANTONIA G. DE         "
    },
    {
        "id": 47,
        "descripcion": "CASAUX EDUARDO                "
    },
    {
        "id": 48,
        "descripcion": "ECUADOR                       "
    },
    {
        "id": 49,
        "descripcion": "CASTELLI                      "
    },
    {
        "id": 50,
        "descripcion": "CASTILLA INT. MARTIN F.       "
    },
    {
        "id": 51,
        "descripcion": "GIGENA HERACLIO               "
    },
    {
        "id": 52,
        "descripcion": "GIL CASTRO ESC. LORENZO       "
    },
    {
        "id": 53,
        "descripcion": "CATAMARCA                     "
    },
    {
        "id": 55,
        "descripcion": "CHACABUCO                     "
    },
    {
        "id": 56,
        "descripcion": "CHACO                         "
    },
    {
        "id": 58,
        "descripcion": "CHAPUIS CLAUDIO               "
    },
    {
        "id": 59,
        "descripcion": "CHICLANA                      "
    },
    {
        "id": 61,
        "descripcion": "CHUBUT                        "
    },
    {
        "id": 62,
        "descripcion": "CINTAS DR. VENTURA            "
    },
    {
        "id": 64,
        "descripcion": "COLETTA ANTONIO               "
    },
    {
        "id": 65,
        "descripcion": "DELLEPIANE SANTIAGO           "
    },
    {
        "id": 66,
        "descripcion": "COLON                         "
    },
    {
        "id": 67,
        "descripcion": "COLTELLI ARMANDO J. S.        "
    },
    {
        "id": 68,
        "descripcion": "COMELLI LUIS                  "
    },
    {
        "id": 69,
        "descripcion": "CORDERO ACACIO                "
    },
    {
        "id": 70,
        "descripcion": "CORDEU ANGEL                  "
    },
    {
        "id": 71,
        "descripcion": "CORDOBA                       "
    },
    {
        "id": 72,
        "descripcion": "CORRIENTES                    "
    },
    {
        "id": 73,
        "descripcion": "DA VINCI LEONARDO             "
    },
    {
        "id": 74,
        "descripcion": "DALLERA PABLO                 "
    },
    {
        "id": 75,
        "descripcion": "DASSO LUIS                    "
    },
    {
        "id": 76,
        "descripcion": "DE ANDREA MÑOR. MIGUEL (PASAJE"
    },
    {
        "id": 77,
        "descripcion": "DE DOMINICIS DR. LUIS         "
    },
    {
        "id": 78,
        "descripcion": "DE LA TORRE LISANDRO          "
    },
    {
        "id": 80,
        "descripcion": "DE PEON ANGEL                 "
    },
    {
        "id": 81,
        "descripcion": "DEL GRECO LUIS                "
    },
    {
        "id": 82,
        "descripcion": "DEL PINO ANDRES               "
    },
    {
        "id": 83,
        "descripcion": "DELLEPIANE INT. JUAN          "
    },
    {
        "id": 85,
        "descripcion": "DI LUCA DR. JULIO JUAN        "
    },
    {
        "id": 86,
        "descripcion": "DONIZETTI GAETANO             "
    },
    {
        "id": 87,
        "descripcion": "DORIA ANDREA                  "
    },
    {
        "id": 88,
        "descripcion": "DORREGO                       "
    },
    {
        "id": 89,
        "descripcion": "SALK DR. JONAS EDWARD         "
    },
    {
        "id": 90,
        "descripcion": "DEL CAMPO ESTANISLAO          "
    },
    {
        "id": 92,
        "descripcion": "ROCCA ENRIQUE                 "
    },
    {
        "id": 93,
        "descripcion": "ECHEVERRIA                    "
    },
    {
        "id": 94,
        "descripcion": "EDISON TOMAS (CORTADA)        "
    },
    {
        "id": 95,
        "descripcion": "ESQUIU FRAY MAMERTO           "
    },
    {
        "id": 96,
        "descripcion": "ESTRADA JOSE MANUEL           "
    },
    {
        "id": 97,
        "descripcion": "FERNANDEZ FELIX               "
    },
    {
        "id": 98,
        "descripcion": "FALUCHO                       "
    },
    {
        "id": 99,
        "descripcion": "FORMOSA                       "
    },
    {
        "id": 100,
        "descripcion": "BELTRAN FRAY LUIS             "
    },
    {
        "id": 101,
        "descripcion": "FREMI HIPOLITO                "
    },
    {
        "id": 102,
        "descripcion": "FRENCH                        "
    },
    {
        "id": 103,
        "descripcion": "DELLEPIANE ANGEL              "
    },
    {
        "id": 104,
        "descripcion": "VIOLA ALFREDO                 "
    },
    {
        "id": 105,
        "descripcion": "GANDHI MAHATMA                "
    },
    {
        "id": 106,
        "descripcion": "GARAY AVDA. JUAN DE           "
    },
    {
        "id": 107,
        "descripcion": "GARIBALDI JOSE                "
    },
    {
        "id": 108,
        "descripcion": "GATTI PEDRO                   "
    },
    {
        "id": 109,
        "descripcion": "GAYA DR. BALDOMERO            "
    },
    {
        "id": 110,
        "descripcion": "GENOVA (PASAJE)               "
    },
    {
        "id": 111,
        "descripcion": "GONZALEZ ELPIDIO              "
    },
    {
        "id": 112,
        "descripcion": "GOUJON ALEJANDRO              "
    },
    {
        "id": 113,
        "descripcion": "SAVIO GRAL.                   "
    },
    {
        "id": 114,
        "descripcion": "MOSCONI GRAL.                 "
    },
    {
        "id": 115,
        "descripcion": "ROCA GRAL.                    "
    },
    {
        "id": 116,
        "descripcion": "GRANADEROS                    "
    },
    {
        "id": 117,
        "descripcion": "GRASSI ANGEL                  "
    },
    {
        "id": 118,
        "descripcion": "GUANELLA JUAN                 "
    },
    {
        "id": 119,
        "descripcion": "GUEMES GRAL. MARTIN M. DE     "
    },
    {
        "id": 120,
        "descripcion": "DE IRIGOYEN AVDA. GRAL. MATIAS"
    },
    {
        "id": 121,
        "descripcion": "DEL CASTILLO                  "
    },
    {
        "id": 123,
        "descripcion": "HERNANDEZ JOSE                "
    },
    {
        "id": 124,
        "descripcion": "ISLAS MALVINAS                "
    },
    {
        "id": 125,
        "descripcion": "INGENIEROS JOSE               "
    },
    {
        "id": 126,
        "descripcion": "DE LOS INMIGRANTES            "
    },
    {
        "id": 128,
        "descripcion": "IRIART FELIPE                 "
    },
    {
        "id": 129,
        "descripcion": "ITURRIAGA LUCAS               "
    },
    {
        "id": 130,
        "descripcion": "JEAN JAURES                   "
    },
    {
        "id": 131,
        "descripcion": "JACOB LUIS PEDRO              "
    },
    {
        "id": 132,
        "descripcion": "JUSTO JUAN B.                 "
    },
    {
        "id": 133,
        "descripcion": "JUAN XXIII                    "
    },
    {
        "id": 134,
        "descripcion": "JUJUY                         "
    },
    {
        "id": 135,
        "descripcion": "KELLY FRANCISCO               "
    },
    {
        "id": 136,
        "descripcion": "KUPERMAN DR. ALEJANDRO        "
    },
    {
        "id": 137,
        "descripcion": "COSTA LUIS                    "
    },
    {
        "id": 138,
        "descripcion": "LA PAMPA                      "
    },
    {
        "id": 139,
        "descripcion": "LA RIOJA                      "
    },
    {
        "id": 140,
        "descripcion": "LAPRIDA                       "
    },
    {
        "id": 141,
        "descripcion": "LAS HERAS                     "
    },
    {
        "id": 142,
        "descripcion": "LAVALLE BOULEVARD GRAL.       "
    },
    {
        "id": 143,
        "descripcion": "DE AMICIS EDMUNDO             "
    },
    {
        "id": 144,
        "descripcion": "LEVALLE GRAL. NICOLAS         "
    },
    {
        "id": 145,
        "descripcion": "LINIERS SANTIAGO DE           "
    },
    {
        "id": 147,
        "descripcion": "DALLERA PEDRO                 "
    },
    {
        "id": 148,
        "descripcion": "REYES LUCIANO S.              "
    },
    {
        "id": 149,
        "descripcion": "MISIONES                      "
    },
    {
        "id": 150,
        "descripcion": "MITRE AVDA. GRAL. BARTOLOME   "
    },
    {
        "id": 151,
        "descripcion": "MODARELLI PEDRO               "
    },
    {
        "id": 152,
        "descripcion": "MOLLO FRANCISCO               "
    },
    {
        "id": 153,
        "descripcion": "MORENO                        "
    },
    {
        "id": 154,
        "descripcion": "MURRAY TOMAS                  "
    },
    {
        "id": 155,
        "descripcion": "NAMUNCURA CEFERINO            "
    },
    {
        "id": 156,
        "descripcion": "NASH SANTIAGO                 "
    },
    {
        "id": 157,
        "descripcion": "NECOCHEA                      "
    },
    {
        "id": 158,
        "descripcion": "O'HIGGINS                     "
    },
    {
        "id": 159,
        "descripcion": "DEMARCO OSVALDO DANIEL        "
    },
    {
        "id": 160,
        "descripcion": "OTAMENDI ROMULO               "
    },
    {
        "id": 161,
        "descripcion": "CHILAVERT. CNEL. MARTINIANO   "
    },
    {
        "id": 162,
        "descripcion": "MARTINO PADRE VITTORIO        "
    },
    {
        "id": 163,
        "descripcion": "OMAR PEDRO                    "
    },
    {
        "id": 164,
        "descripcion": "ROZA PADRE LUIS V.            "
    },
    {
        "id": 165,
        "descripcion": "PAGANI MIGUEL                 "
    },
    {
        "id": 166,
        "descripcion": "PARDELLAS RICARDO             "
    },
    {
        "id": 167,
        "descripcion": "PASAJE N° 1                   "
    },
    {
        "id": 168,
        "descripcion": "PASAJE N° 2                   "
    },
    {
        "id": 169,
        "descripcion": "CHAPUIS SUSANA                "
    },
    {
        "id": 170,
        "descripcion": "ARENALES (PASAJE)             "
    },
    {
        "id": 171,
        "descripcion": "BERUTI (PASAJE)               "
    },
    {
        "id": 172,
        "descripcion": "CABRERA CANDIDO               "
    },
    {
        "id": 173,
        "descripcion": "FRENCH (PASAJE)               "
    },
    {
        "id": 174,
        "descripcion": "CORDEU MANUEL                 "
    },
    {
        "id": 175,
        "descripcion": "CHAPUIS LUIS                  "
    },
    {
        "id": 176,
        "descripcion": "PASO JUAN JOSE                "
    },
    {
        "id": 177,
        "descripcion": "PASTEUR LUIS                  "
    },
    {
        "id": 178,
        "descripcion": "PELLEGRINI CARLOS             "
    },
    {
        "id": 179,
        "descripcion": "MORENO PERITO                 "
    },
    {
        "id": 180,
        "descripcion": "PERRONE BARTOLOME             "
    },
    {
        "id": 181,
        "descripcion": "PETITTI CARLOS                "
    },
    {
        "id": 182,
        "descripcion": "PARAGUAY                      "
    },
    {
        "id": 183,
        "descripcion": "PERU                          "
    },
    {
        "id": 185,
        "descripcion": "PUCCINI                       "
    },
    {
        "id": 186,
        "descripcion": "PUENTE DEL INCA               "
    },
    {
        "id": 187,
        "descripcion": "ROJAS RICARDO                 "
    },
    {
        "id": 188,
        "descripcion": "RUTA NACIONAL N° 9            "
    },
    {
        "id": 189,
        "descripcion": "RAWSON                        "
    },
    {
        "id": 190,
        "descripcion": "REPETTO NICOLAS               "
    },
    {
        "id": 191,
        "descripcion": "RIBERA DEL PARANA             "
    },
    {
        "id": 192,
        "descripcion": "RIGOLI DR. ANTONIO            "
    },
    {
        "id": 193,
        "descripcion": "RIO NEGRO                     "
    },
    {
        "id": 194,
        "descripcion": "RIO LUJAN                     "
    },
    {
        "id": 195,
        "descripcion": "RIPPA FRANCISCO               "
    },
    {
        "id": 196,
        "descripcion": "CONTI ESTEBAN                 "
    },
    {
        "id": 197,
        "descripcion": "RIVADAVIA AVDA.               "
    },
    {
        "id": 198,
        "descripcion": "RIVES ERNESTO                 "
    },
    {
        "id": 199,
        "descripcion": "COMAS LEURENTINO (SECC. ISLAS)"
    },
    {
        "id": 200,
        "descripcion": "ROMANO FELIPE                 "
    },
    {
        "id": 201,
        "descripcion": "ROSARIO                       "
    },
    {
        "id": 202,
        "descripcion": "ROSSINI                       "
    },
    {
        "id": 203,
        "descripcion": "RUTA PROVINCIAL N° 4          "
    },
    {
        "id": 204,
        "descripcion": "RUTA PROVINCIAL N° 6          "
    },
    {
        "id": 205,
        "descripcion": "RUTA NACIONAL N° 12           "
    },
    {
        "id": 206,
        "descripcion": "SANTIAGO DEL ESTERO           "
    },
    {
        "id": 207,
        "descripcion": "SANTA MARIA DE ORO FRAY       "
    },
    {
        "id": 208,
        "descripcion": "SAAVEDRA                      "
    },
    {
        "id": 209,
        "descripcion": "SABATTINI AMADEO              "
    },
    {
        "id": 210,
        "descripcion": "SAENZ PE¥A ROQUE              "
    },
    {
        "id": 211,
        "descripcion": "SALMINI JULIO CELESTINO       "
    },
    {
        "id": 212,
        "descripcion": "SAN LORENZO                   "
    },
    {
        "id": 213,
        "descripcion": "SAN LUIS                      "
    },
    {
        "id": 214,
        "descripcion": "SAN JUAN                      "
    },
    {
        "id": 215,
        "descripcion": "SCHWEITZER                    "
    },
    {
        "id": 217,
        "descripcion": "SAN MARTIN                    "
    },
    {
        "id": 218,
        "descripcion": "SANTA CRUZ                    "
    },
    {
        "id": 219,
        "descripcion": "SANTA FE                      "
    },
    {
        "id": 221,
        "descripcion": "SARMIENTO BOULEVARD           "
    },
    {
        "id": 222,
        "descripcion": "SAUTON GASTON CARLOS          "
    },
    {
        "id": 223,
        "descripcion": "SCHINONI ANGEL                "
    },
    {
        "id": 224,
        "descripcion": "SIRI PEDRO                    "
    },
    {
        "id": 225,
        "descripcion": "SIVORI MARCELINO              "
    },
    {
        "id": 226,
        "descripcion": "URQUIZA                       "
    },
    {
        "id": 227,
        "descripcion": "GONZALEZ DR. TRISTAN          "
    },
    {
        "id": 228,
        "descripcion": "TIERRA DEL FUEGO              "
    },
    {
        "id": 229,
        "descripcion": "TRENQUE LAUQUEN (PASAJE)      "
    },
    {
        "id": 230,
        "descripcion": "TROFELI JOSE MARIA            "
    },
    {
        "id": 231,
        "descripcion": "TUCUMAN                       "
    },
    {
        "id": 232,
        "descripcion": "VIGALONDO JUSTO               "
    },
    {
        "id": 233,
        "descripcion": "URUGUAY                       "
    },
    {
        "id": 234,
        "descripcion": "DEMARCO VICENTE               "
    },
    {
        "id": 235,
        "descripcion": "LOPEZ VICENTE                 "
    },
    {
        "id": 236,
        "descripcion": "SAAVEDRA ORFELIO              "
    },
    {
        "id": 237,
        "descripcion": "VENEZUELA                     "
    },
    {
        "id": 238,
        "descripcion": "VERDI                         "
    },
    {
        "id": 239,
        "descripcion": "VIALE MANUEL                  "
    },
    {
        "id": 240,
        "descripcion": "VIAMONTE                      "
    },
    {
        "id": 241,
        "descripcion": "VIGNA JUAN                    "
    },
    {
        "id": 243,
        "descripcion": "VILLEGAS GRAL.                "
    },
    {
        "id": 244,
        "descripcion": "WINTER GRAL. LORENZO (PASAJE) "
    },
    {
        "id": 246,
        "descripcion": "ZAVALIA DR. ANTONIO           "
    },
    {
        "id": 247,
        "descripcion": "ZAVALLO DR. ANTENOR F.        "
    },
    {
        "id": 248,
        "descripcion": "PERON AVDA. TTE. GRAL. JUAN D."
    },
    {
        "id": 249,
        "descripcion": "BUENOS AIRES                  "
    },
    {
        "id": 250,
        "descripcion": "MITRE AVDA. ING. EMILIO       "
    },
    {
        "id": 251,
        "descripcion": "COLETTA CASILDO               "
    },
    {
        "id": 252,
        "descripcion": "COLETTA JOSE                  "
    },
    {
        "id": 253,
        "descripcion": "CACERES MANUEL HUGO           "
    },
    {
        "id": 254,
        "descripcion": "GIL GOMEZ JOSE                "
    },
    {
        "id": 255,
        "descripcion": "GIOBELLINI PEDRO              "
    },
    {
        "id": 256,
        "descripcion": "CAVALLI NESTOR                "
    },
    {
        "id": 257,
        "descripcion": "GISMUNDI NARCISO              "
    },
    {
        "id": 258,
        "descripcion": "ROFFO DR. ANGEL H.            "
    },
    {
        "id": 259,
        "descripcion": "RODRIGUEZ MARTIN              "
    },
    {
        "id": 260,
        "descripcion": "MACHINANDIARENA FRANCISCO     "
    },
    {
        "id": 261,
        "descripcion": "MAGGIO DR. ARMANDO            "
    },
    {
        "id": 262,
        "descripcion": "MAIPU                         "
    },
    {
        "id": 263,
        "descripcion": "MARCONI GUILLERMO             "
    },
    {
        "id": 264,
        "descripcion": "MARMOL                        "
    },
    {
        "id": 265,
        "descripcion": "MATHEU                        "
    },
    {
        "id": 266,
        "descripcion": "MAUTONE DR. JOSE MARIA        "
    },
    {
        "id": 267,
        "descripcion": "BESSASO MANUEL                "
    },
    {
        "id": 268,
        "descripcion": "MENDOZA                       "
    },
    {
        "id": 269,
        "descripcion": "MIRACCA ALFREDO               "
    },
    {
        "id": 270,
        "descripcion": "PUEYRREDON                    "
    },
    {
        "id": 271,
        "descripcion": "YRIGOYEN AVDA. HIPOLITO       "
    },
    {
        "id": 272,
        "descripcion": "PELLET EMILIO                 "
    },
    {
        "id": 273,
        "descripcion": "GARCIA JUAN PIO               "
    },
    {
        "id": 274,
        "descripcion": "ECHEVERRIA JOSE MARIA         "
    },
    {
        "id": 276,
        "descripcion": "LURASCHI AVDA. CARLOS G.      "
    },
    {
        "id": 277,
        "descripcion": "ALVEAR MARCELO T. DE          "
    },
    {
        "id": 278,
        "descripcion": "PAMPARANA BASILIO             "
    },
    {
        "id": 279,
        "descripcion": "PALACIOS ALFREDO              "
    },
    {
        "id": 280,
        "descripcion": "MOLINA MATIAS                 "
    },
    {
        "id": 281,
        "descripcion": "COLECTORA SUR                 "
    },
    {
        "id": 282,
        "descripcion": "COLECTORA NORTE               "
    },
    {
        "id": 283,
        "descripcion": "VIOLA LEON RAFAEL             "
    },
    {
        "id": 284,
        "descripcion": "ILLIA PTE. DR. ARTURO"
    },
    {
        "id": 285,
        "descripcion": "BRID TOMAS ALFREDO            "
    },
    {
        "id": 286,
        "descripcion": "BREGLIA PASCUAL               "
    },
    {
        "id": 287,
        "descripcion": "GRASSI CJAL. LUIS DOMINGO A.  "
    },
    {
        "id": 288,
        "descripcion": "ARMESTO INT. ALBERTO          "
    },
    {
        "id": 289,
        "descripcion": "FABRIS M¥OR. LUIS ANGEL       "
    },
    {
        "id": 290,
        "descripcion": "SIMINI DR. JORGE ALBERTO      "
    },
    {
        "id": 291,
        "descripcion": "VIBOUD FILIBERTO              "
    },
    {
        "id": 292,
        "descripcion": "VERDIER PABLO                 "
    },
    {
        "id": 293,
        "descripcion": "BARCA MIGUEL                  "
    },
    {
        "id": 294,
        "descripcion": "MORO INT. JOSE                "
    },
    {
        "id": 295,
        "descripcion": "NARDO JUAN                    "
    },
    {
        "id": 296,
        "descripcion": "BERNATENE BERNARDO            "
    },
    {
        "id": 297,
        "descripcion": "BAYLEY EDUARDO                "
    },
    {
        "id": 298,
        "descripcion": "BIDEGAIN BAUTISTA             "
    },
    {
        "id": 299,
        "descripcion": "AHUMADA POLONIO               "
    },
    {
        "id": 300,
        "descripcion": "UGARTEMENDIA MIGUEL           "
    },
    {
        "id": 301,
        "descripcion": "IBARRA BENIGNO                "
    },
    {
        "id": 302,
        "descripcion": "ZARATE BERNABELA              "
    },
    {
        "id": 303,
        "descripcion": "MARTINOLI HERCULES            "
    },
    {
        "id": 304,
        "descripcion": "DRAGONE ANTONIO               "
    },
    {
        "id": 305,
        "descripcion": "COMBATIENTES DE MALVINAS      "
    },
    {
        "id": 308,
        "descripcion": "OCHOA FERNANDO                "
    },
    {
        "id": 310,
        "descripcion": "CROSIO JOSE B.                "
    },
    {
        "id": 311,
        "descripcion": "LARRALDE CRISOLOGO            "
    },
    {
        "id": 314,
        "descripcion": "QUIROGA JUAN                  "
    },
    {
        "id": 316,
        "descripcion": "MONTES DE OCA DR. MANUEL A.   "
    },
    {
        "id": 317,
        "descripcion": "DE LOS TRABAJADORES           "
    },
    {
        "id": 318,
        "descripcion": "CARRETTO PABLO                "
    },
    {
        "id": 319,
        "descripcion": "BOMBEROS VOLUNTARIOS          "
    },
    {
        "id": 320,
        "descripcion": "SIERRA JOSE                   "
    },
    {
        "id": 321,
        "descripcion": "LOZANO DE OLIVERA MARIA       "
    },
    {
        "id": 322,
        "descripcion": "MELO JULIO ARMANDO            "
    },
    {
        "id": 323,
        "descripcion": "CARMONA LUIS AURELIO          "
    },
    {
        "id": 324,
        "descripcion": "NEGRETE TOMAS EDGAR           "
    },
    {
        "id": 325,
        "descripcion": "FERNANDEZ FRANCISCO P.        "
    },
    {
        "id": 326,
        "descripcion": "FERNANDEZ JACINTO             "
    },
    {
        "id": 327,
        "descripcion": "FORLANI LUIS                  "
    },
    {
        "id": 328,
        "descripcion": "ARGUI¥ANO JOSE                "
    },
    {
        "id": 329,
        "descripcion": "VIOLA PBRO. JOSE              "
    },
    {
        "id": 330,
        "descripcion": "VIALE SANTIAGO                "
    },
    {
        "id": 331,
        "descripcion": "RUSSELL RAUL EDUARDO          "
    },
    {
        "id": 332,
        "descripcion": "GURREA JESUS                  "
    },
    {
        "id": 333,
        "descripcion": "MOZO SADI                     "
    },
    {
        "id": 334,
        "descripcion": "ANTARTIDA ARGENTINA           "
    },
    {
        "id": 335,
        "descripcion": "TORRES ULISES                 "
    },
    {
        "id": 336,
        "descripcion": "MAGALDI AGUSTIN               "
    },
    {
        "id": 337,
        "descripcion": "NICARAGUA                     "
    },
    {
        "id": 338,
        "descripcion": "DULCE NICOLAS                 "
    },
    {
        "id": 339,
        "descripcion": "BELELLI ANTONIO               "
    },
    {
        "id": 340,
        "descripcion": "LAGUINGE ESTEBAN              "
    },
    {
        "id": 341,
        "descripcion": "6 DE JULIO AVDA.              "
    },
    {
        "id": 342,
        "descripcion": "REINO DE NORUEGA              "
    },
    {
        "id": 343,
        "descripcion": "PUERTO ARGENTINO              "
    },
    {
        "id": 344,
        "descripcion": "YAQUEME CONC. ESTEBAN R.      "
    },
    {
        "id": 345,
        "descripcion": "CASTA¥AGA NESTOR R.           "
    },
    {
        "id": 346,
        "descripcion": "QUINQUELA MARTIN BENITO       "
    },
    {
        "id": 347,
        "descripcion": "MORIXE FRANCISCO              "
    },
    {
        "id": 348,
        "descripcion": "IGLESIAS MANUEL               "
    },
    {
        "id": 349,
        "descripcion": "LELOIR DR. LUIS FEDERICO      "
    },
    {
        "id": 350,
        "descripcion": "AGOTE DR. LUIS                "
    },
    {
        "id": 351,
        "descripcion": "MOLLO CAMILO                  "
    },
    {
        "id": 352,
        "descripcion": "DE PAOLI RUTH MIRELLA         "
    },
    {
        "id": 353,
        "descripcion": "CASTRO MARTIN                 "
    },
    {
        "id": 354,
        "descripcion": "ROSSITER CARLOS               "
    },
    {
        "id": 355,
        "descripcion": "LOS JAZMINES                  "
    },
    {
        "id": 356,
        "descripcion": "PRINGLES CNEL. JUAN PASCUAL   "
    },
    {
        "id": 357,
        "descripcion": "CAPPELLETTI DOMINGO LUIS      "
    },
    {
        "id": 358,
        "descripcion": "CRUCERO GENERAL BELGRANO      "
    },
    {
        "id": 359,
        "descripcion": "GIACHINO CAP. PEDRO EDGARDO   "
    },
    {
        "id": 360,
        "descripcion": "2 DE ABRIL                    "
    },
    {
        "id": 361,
        "descripcion": "PUERTO SAN CARLOS             "
    },
    {
        "id": 362,
        "descripcion": "ISLA SOLEDAD                  "
    },
    {
        "id": 363,
        "descripcion": "ECHEVERRIA LORENZO            "
    },
    {
        "id": 364,
        "descripcion": "BUSSO DR. JOSE MIGUEL         "
    },
    {
        "id": 365,
        "descripcion": "ALBO LUIS G.                  "
    },
    {
        "id": 366,
        "descripcion": "ANGELET NARCISO               "
    },
    {
        "id": 367,
        "descripcion": "ASTELARRA LEANDRO             "
    },
    {
        "id": 368,
        "descripcion": "AYOS JORGE RAUL               "
    },
    {
        "id": 369,
        "descripcion": "BALDRICH ING. ALONSO          "
    },
    {
        "id": 370,
        "descripcion": "BALOSSINO ABEL                "
    },
    {
        "id": 371,
        "descripcion": "BARTHEBORDE JUAN              "
    },
    {
        "id": 372,
        "descripcion": "BARRIOLA DOMINGO              "
    },
    {
        "id": 373,
        "descripcion": "BEGUE ARNALDO                 "
    },
    {
        "id": 374,
        "descripcion": "BEHOCARAY ADRIANO             "
    },
    {
        "id": 375,
        "descripcion": "BERNI ANTONIO                 "
    },
    {
        "id": 376,
        "descripcion": "BERON HONORIO                 "
    },
    {
        "id": 377,
        "descripcion": "BOLIVIA                       "
    },
    {
        "id": 378,
        "descripcion": "BOLZAN LUIS S.                "
    },
    {
        "id": 379,
        "descripcion": "BRANDSEN CNEL. FEDERICO       "
    },
    {
        "id": 380,
        "descripcion": "BRASIL                        "
    },
    {
        "id": 381,
        "descripcion": "BRUNI DR. MIGUEL ANGEL        "
    },
    {
        "id": 382,
        "descripcion": "BURGOS DOMINGO                "
    },
    {
        "id": 383,
        "descripcion": "BUTTLER GUILLERMO             "
    },
    {
        "id": 384,
        "descripcion": "LOPEZ PI¥ON DR. ANTONIO       "
    },
    {
        "id": 385,
        "descripcion": "COCOMAROLA MARIO DEL TRANSITO "
    },
    {
        "id": 386,
        "descripcion": "DEVOTO TOMAS                  "
    },
    {
        "id": 387,
        "descripcion": "CROCCIO CARLOS                "
    },
    {
        "id": 388,
        "descripcion": "MARTELLI GERONIMO             "
    },
    {
        "id": 389,
        "descripcion": "CHIFFLET FRANCISCO            "
    },
    {
        "id": 390,
        "descripcion": "CABRERA SALVADOR              "
    },
    {
        "id": 391,
        "descripcion": "NEUQUEN                       "
    },
    {
        "id": 392,
        "descripcion": "CUELLI GABINO                 "
    },
    {
        "id": 393,
        "descripcion": "IZZETTA                       "
    },
    {
        "id": 394,
        "descripcion": "FERNANDEZ CARLOS              "
    },
    {
        "id": 395,
        "descripcion": "LOS ALAMOS                    "
    },
    {
        "id": 396,
        "descripcion": "LOS GAUCHOS                   "
    },
    {
        "id": 397,
        "descripcion": "DE LA PE¥A WASHINGTON         "
    },
    {
        "id": 398,
        "descripcion": "ENTRE RIOS                    "
    },
    {
        "id": 399,
        "descripcion": "EL POTRO                      "
    },
    {
        "id": 402,
        "descripcion": "ALSINA DR. ADOLFO (PASAJE)    "
    },
    {
        "id": 403,
        "descripcion": "BENTANCOURT PLACIDO           "
    },
    {
        "id": 404,
        "descripcion": "BENTANCOURT TELESFORO         "
    },
    {
        "id": 405,
        "descripcion": "CAMEZANA ANGEL                "
    },
    {
        "id": 406,
        "descripcion": "CASSUSA PEDRO                 "
    },
    {
        "id": 407,
        "descripcion": "CASTA¥OS JOSE MARIA           "
    },
    {
        "id": 408,
        "descripcion": "CE¥A JULIAN (PASAJE)          "
    },
    {
        "id": 409,
        "descripcion": "COLOMBIA                      "
    },
    {
        "id": 410,
        "descripcion": "COSTA RICA                    "
    },
    {
        "id": 411,
        "descripcion": "CUBA                          "
    },
    {
        "id": 412,
        "descripcion": "CHILE                         "
    },
    {
        "id": 413,
        "descripcion": "CHURRINCHE                    "
    },
    {
        "id": 414,
        "descripcion": "DE LA CARCOVA ERNESTO         "
    },
    {
        "id": 415,
        "descripcion": "EL GORRION                    "
    },
    {
        "id": 416,
        "descripcion": "MAGARIÑOS CONSTANTINO"
    },
    {
        "id": 417,
        "descripcion": "BARLETTA SAVERIO              "
    },
    {
        "id": 418,
        "descripcion": "GENTA CELESTINO               "
    },
    {
        "id": 419,
        "descripcion": "MAFFEIS EUGENIO               "
    },
    {
        "id": 420,
        "descripcion": "EL FOGON                      "
    },
    {
        "id": 421,
        "descripcion": "EL JACARANDA                  "
    },
    {
        "id": 422,
        "descripcion": "EL LAZO                       "
    },
    {
        "id": 423,
        "descripcion": "EL OMBU                       "
    },
    {
        "id": 424,
        "descripcion": "EL PALENQUE                   "
    },
    {
        "id": 425,
        "descripcion": "EL PORTEZUELO                 "
    },
    {
        "id": 426,
        "descripcion": "EL QUINCHO                    "
    },
    {
        "id": 427,
        "descripcion": "EL RESERO                     "
    },
    {
        "id": 428,
        "descripcion": "EL SALVADOR                   "
    },
    {
        "id": 429,
        "descripcion": "EL TALA                       "
    },
    {
        "id": 430,
        "descripcion": "EL ZORZAL                     "
    },
    {
        "id": 431,
        "descripcion": "ERRECART BERNARDO             "
    },
    {
        "id": 432,
        "descripcion": "ESCOLA CAP. CMDTE. JOSE M.    "
    },
    {
        "id": 433,
        "descripcion": "ETCHALUZ MANUEL               "
    },
    {
        "id": 434,
        "descripcion": "FADER FERNANDO                "
    },
    {
        "id": 435,
        "descripcion": "FARELO JUAN                   "
    },
    {
        "id": 436,
        "descripcion": "FRANTIELLI ANTONIO            "
    },
    {
        "id": 437,
        "descripcion": "FUCHS ING. JOSE               "
    },
    {
        "id": 438,
        "descripcion": "FUMIERE JORGE                 "
    },
    {
        "id": 439,
        "descripcion": "GARAY SANTIAGO                "
    },
    {
        "id": 440,
        "descripcion": "GRACIANI JUAN                 "
    },
    {
        "id": 441,
        "descripcion": "GUATEMALA                     "
    },
    {
        "id": 442,
        "descripcion": "HONDURAS                      "
    },
    {
        "id": 443,
        "descripcion": "HOUSSAY DR. BERNARDO A.       "
    },
    {
        "id": 444,
        "descripcion": "HUERGO ING. LUIS A.           "
    },
    {
        "id": 445,
        "descripcion": "IGUAZU                        "
    },
    {
        "id": 446,
        "descripcion": "ILLARRAMENDI CESAREO          "
    },
    {
        "id": 447,
        "descripcion": "ITALIA                        "
    },
    {
        "id": 448,
        "descripcion": "JACOMET FRANCISCO             "
    },
    {
        "id": 449,
        "descripcion": "SCHINONI JUAN (PASAJE)        "
    },
    {
        "id": 451,
        "descripcion": "LA CARRETA                    "
    },
    {
        "id": 452,
        "descripcion": "LA CUMBRECITA                 "
    },
    {
        "id": 453,
        "descripcion": "LAGO ARGENTINO                "
    },
    {
        "id": 454,
        "descripcion": "LA MADRINA                    "
    },
    {
        "id": 455,
        "descripcion": "LAPLUME ANICETO               "
    },
    {
        "id": 456,
        "descripcion": "LAS ACACIAS                   "
    },
    {
        "id": 457,
        "descripcion": "LAS ACHIRAS                   "
    },
    {
        "id": 458,
        "descripcion": "LAS AGUILAS                   "
    },
    {
        "id": 459,
        "descripcion": "LAS AMAPOLAS                  "
    },
    {
        "id": 460,
        "descripcion": "LAS AZALEAS                   "
    },
    {
        "id": 461,
        "descripcion": "LAS CALANDRIAS                "
    },
    {
        "id": 462,
        "descripcion": "LAS CALENDULAS                "
    },
    {
        "id": 463,
        "descripcion": "LAS DALIAS                    "
    },
    {
        "id": 464,
        "descripcion": "LAS GLICINAS                  "
    },
    {
        "id": 465,
        "descripcion": "LAS HORTENSIAS                "
    },
    {
        "id": 466,
        "descripcion": "LAS MARTINETAS                "
    },
    {
        "id": 467,
        "descripcion": "LAS ORQUIDEAS                 "
    },
    {
        "id": 468,
        "descripcion": "LAS PETUNIAS                  "
    },
    {
        "id": 469,
        "descripcion": "LAS PRIMULAS                  "
    },
    {
        "id": 470,
        "descripcion": "LAS ROSAS                     "
    },
    {
        "id": 471,
        "descripcion": "LAS TIJERETAS                 "
    },
    {
        "id": 472,
        "descripcion": "LAS TORCAZAS                  "
    },
    {
        "id": 473,
        "descripcion": "LAS VERBENAS                  "
    },
    {
        "id": 474,
        "descripcion": "LAS VIOLETAS                  "
    },
    {
        "id": 475,
        "descripcion": "LAVEZZARI JUAN                "
    },
    {
        "id": 476,
        "descripcion": "LEPORE BASILIO                "
    },
    {
        "id": 477,
        "descripcion": "LOPEZ Y PLANES                "
    },
    {
        "id": 478,
        "descripcion": "LOS ABEDULES                  "
    },
    {
        "id": 479,
        "descripcion": "LOS ARCES                     "
    },
    {
        "id": 480,
        "descripcion": "LOS AROMOS                    "
    },
    {
        "id": 481,
        "descripcion": "LOS CARDENALES                "
    },
    {
        "id": 482,
        "descripcion": "LOS CARPINTEROS               "
    },
    {
        "id": 483,
        "descripcion": "LOS CASTA¥OS                  "
    },
    {
        "id": 484,
        "descripcion": "LOS COCOS                     "
    },
    {
        "id": 485,
        "descripcion": "LOS CONDORES                  "
    },
    {
        "id": 486,
        "descripcion": "LOS CHAJAS                    "
    },
    {
        "id": 487,
        "descripcion": "LOS FLAMENCOS                 "
    },
    {
        "id": 488,
        "descripcion": "LOS HORNEROS                  "
    },
    {
        "id": 489,
        "descripcion": "LOS JACINTOS                  "
    },
    {
        "id": 490,
        "descripcion": "LOS JILGUEROS                 "
    },
    {
        "id": 491,
        "descripcion": "LOS NOGALES                   "
    },
    {
        "id": 492,
        "descripcion": "LOS PARAISOS                  "
    },
    {
        "id": 493,
        "descripcion": "LOS PINOS                     "
    },
    {
        "id": 494,
        "descripcion": "LOS ROBLES                    "
    },
    {
        "id": 496,
        "descripcion": "LOS SAUCES                    "
    },
    {
        "id": 497,
        "descripcion": "LOS TEROS                     "
    },
    {
        "id": 498,
        "descripcion": "LOS TULIPANES                 "
    },
    {
        "id": 499,
        "descripcion": "LLAO LLAO                     "
    },
    {
        "id": 500,
        "descripcion": "MANCICIDOR JOSE MIGUEL        "
    },
    {
        "id": 501,
        "descripcion": "MANSILLA GRAL. LUCIO VICTOR   "
    },
    {
        "id": 502,
        "descripcion": "MARTINEZ LUCIO                "
    },
    {
        "id": 503,
        "descripcion": "MATTI GUILLERMO               "
    },
    {
        "id": 504,
        "descripcion": "MELGAR GERVASIO               "
    },
    {
        "id": 505,
        "descripcion": "MEXICO                        "
    },
    {
        "id": 506,
        "descripcion": "MOREL CARLOS                  "
    },
    {
        "id": 507,
        "descripcion": "MOYA PEDRO                    "
    },
    {
        "id": 508,
        "descripcion": "PANAMA                        "
    },
    {
        "id": 509,
        "descripcion": "PAZ GRAL. JOSE MARIA          "
    },
    {
        "id": 510,
        "descripcion": "PECORENA FRANCISCO            "
    },
    {
        "id": 511,
        "descripcion": "PEDROSA HONORIO               "
    },
    {
        "id": 512,
        "descripcion": "PEREZ LEDESMA MANUEL          "
    },
    {
        "id": 513,
        "descripcion": "PETTORUTI EMILIO              "
    },
    {
        "id": 514,
        "descripcion": "PIEDRABUENA CMTE. LUIS        "
    },
    {
        "id": 515,
        "descripcion": "PIEDRAS BLANCAS               "
    },
    {
        "id": 516,
        "descripcion": "PISONI JOSE FERNANDO          "
    },
    {
        "id": 517,
        "descripcion": "PONCE DE LEON                 "
    },
    {
        "id": 518,
        "descripcion": "PORTO AVELINO                 "
    },
    {
        "id": 519,
        "descripcion": "POSATTI JOSEFINA              "
    },
    {
        "id": 520,
        "descripcion": "POSSE FRANCISCO A.            "
    },
    {
        "id": 521,
        "descripcion": "POSSE MANUEL                  "
    },
    {
        "id": 522,
        "descripcion": "POTRERO DE LAS BURRAS         "
    },
    {
        "id": 523,
        "descripcion": "PUEYRREDON PRILIDIANO         "
    },
    {
        "id": 524,
        "descripcion": "PUJALET JUAN                  "
    },
    {
        "id": 525,
        "descripcion": "QUIROGA OTILIA                "
    },
    {
        "id": 526,
        "descripcion": "REPUBLICA DOMINICANA          "
    },
    {
        "id": 527,
        "descripcion": "ROBLEDO MIGUEL                "
    },
    {
        "id": 528,
        "descripcion": "RODRIGUEZ FRANCISCO DEL JESUS "
    },
    {
        "id": 529,
        "descripcion": "RODRIGUEZ JOSE MARIA          "
    },
    {
        "id": 530,
        "descripcion": "RONDEAU GRAL. JOSE            "
    },
    {
        "id": 531,
        "descripcion": "RUCCI GREGORIO                "
    },
    {
        "id": 532,
        "descripcion": "SALTA                         "
    },
    {
        "id": 533,
        "descripcion": "SANCHEZ JOSE MARIA            "
    },
    {
        "id": 534,
        "descripcion": "SAPORITI VICENTE              "
    },
    {
        "id": 535,
        "descripcion": "SARDI NICOLAS                 "
    },
    {
        "id": 536,
        "descripcion": "SARRATEA MANUEL               "
    },
    {
        "id": 537,
        "descripcion": "SAUBABER GERMAN               "
    },
    {
        "id": 538,
        "descripcion": "SIVORI EDUARDO                "
    },
    {
        "id": 539,
        "descripcion": "SOLER GRAL. ESTANISLAO        "
    },
    {
        "id": 540,
        "descripcion": "SPILIMBERGO LINO              "
    },
    {
        "id": 541,
        "descripcion": "STORNI ALFONSINA              "
    },
    {
        "id": 542,
        "descripcion": "TARTARA ANSELMO               "
    },
    {
        "id": 543,
        "descripcion": "TILCARA                       "
    },
    {
        "id": 544,
        "descripcion": "TINOGASTA                     "
    },
    {
        "id": 545,
        "descripcion": "TOBAL IGNACIO                 "
    },
    {
        "id": 546,
        "descripcion": "URDANIZ FERMIN                "
    },
    {
        "id": 547,
        "descripcion": "VI¥AS CEFERINO                "
    },
    {
        "id": 548,
        "descripcion": "VIOLA FRANCISCO               "
    },
    {
        "id": 549,
        "descripcion": "CAFRUNE, JORGE                "
    },
    {
        "id": 550,
        "descripcion": "DELLEPIANE, CALIXTO BARTOLOME "
    },
    {
        "id": 551,
        "descripcion": "STAMPONI, HECTOR LUCIANO      "
    },
    {
        "id": 552,
        "descripcion": "FRANCINI, ENRIQUE MARIO       "
    },
    {
        "id": 553,
        "descripcion": "MARCHAN, ANSELMO              "
    },
    {
        "id": 554,
        "descripcion": "DEL TRABAJO y la PRODUCCIÓN"
    },
    {
        "id": 555,
        "descripcion": "AVDA. INT. JORGE RUBEN VARELA "
    },
    {
        "id": 556,
        "descripcion": "Ingrese Calle.."
    },
    {
        "id": 557,
        "descripcion": "LOS ALERCES"
    },
    {
        "id": 558,
        "descripcion": "Camino Red Secundaria Provincial 014-02"
    },
    {
        "id": 559,
        "descripcion": "Camino Red Secundaria Provincial 014-04"
    },
    {
        "id": 560,
        "descripcion": "Camino Red Secundaria Provincial 014-05"
    },
    {
        "id": 561,
        "descripcion": "PAPA FRANCISCO"
    },
    {
        "id": 562,
        "descripcion": "GUIDO SPANO"
    },
    {
        "id": 563,
        "descripcion": "Pappo Napolitano"
    },
    {
        "id": 564,
        "descripcion": "calle sin nombre"
    },
    {
        "id": 565,
        "descripcion": "LIS Dr EDAGARDO NORBERTO"
    },
    {
        "id": 566,
        "descripcion": "Los Algarrobos"
    },
    {
        "id": 567,
        "descripcion": "CERATI GUSTAVO"
    },
    {
        "id": 568,
        "descripcion": "Los Cedros"
    },
    {
        "id": 569,
        "descripcion": "FONTANARROSA"
    },
    {
        "id": 571,
        "descripcion": "ZALDIVAR Graciela Leonor"
    },
    {
        "id": 574,
        "descripcion": "AVENIDA M UGARTE"
    },
    {
        "id": 575,
        "descripcion": "Los Almendros"
    },
    {
        "id": 576,
        "descripcion": "Los Eucaliptos"
    },
    {
        "id": 577,
        "descripcion": "Los Naranjos"
    },
    {
        "id": 578,
        "descripcion": "Las Palmeras"
    },
    {
        "id": 579,
        "descripcion": "Los Cerezos"
    },
    {
        "id": 580,
        "descripcion": "Los Ciruelos"
    },
    {
        "id": 581,
        "descripcion": "Los Durazneros"
    },
    {
        "id": 582,
        "descripcion": "Los Fresnos"
    },
    {
        "id": 583,
        "descripcion": "Los Laureles"
    },
    {
        "id": 586,
        "descripcion": "Los Cipreses"
    },
    {
        "id": 587,
        "descripcion": "Jorge Luis Borges"
    },
    {
        "id": 588,
        "descripcion": "Alberto Olmedo"
    },
    {
        "id": 589,
        "descripcion": "Luis Alberto Spinetta"
    },
    {
        "id": 590,
        "descripcion": "Mercedes SOSA"
    },
    {
        "id": 591,
        "descripcion": "Facundo CABRAL"
    },
    {
        "id": 592,
        "descripcion": "Hernán FIGUEROA REYES"
    },
    {
        "id": 593,
        "descripcion": "Argentino LUNA"
    },
    {
        "id": 594,
        "descripcion": "Carlos TORRES VILA"
    },
    {
        "id": 595,
        "descripcion": "Atahualpa YUPANQUI"
    },
    {
        "id": 596,
        "descripcion": "Ernesto Sabato"
    },
    {
        "id": 597,
        "descripcion": "Los Lapachos"
    },
    {
        "id": 598,
        "descripcion": "Alides Cruz"
    },
    {
        "id": 599,
        "descripcion": "LOS CASTAÑOS"
    },
    {
        "id": 600,
        "descripcion": "INTERNO II ( B° 21 DE SEPTIEMBRE)"
    },
    {
        "id": 601,
        "descripcion": "Ruben Buks"
    },
    {
        "id": 602,
        "descripcion": "-"
    },
    {
        "id": 609,
        "descripcion": "C.C. MERCEDES"
    },
    {
        "id": 611,
        "descripcion": "C.R.Sec.Prov. 014-02"
    },
    {
        "id": 612,
        "descripcion": "C.R.Sec.Prov. 014-03"
    },
    {
        "id": 613,
        "descripcion": "C.R.Sec.Prov. 014-04"
    },
    {
        "id": 614,
        "descripcion": "C.R.Sec.Prov. 014-05"
    },
    {
        "id": 615,
        "descripcion": "C.R.Sec.Prov. 014-06"
    },
    {
        "id": 617,
        "descripcion": "Ca.Red.Sec.Prov.014-03"
    },
    {
        "id": 618,
        "descripcion": "Ca.Red.Sec.Prov.014-04"
    },
    {
        "id": 619,
        "descripcion": "Ca.Red.Sec.Prov.014-05"
    },
    {
        "id": 620,
        "descripcion": "Ca.Red.Sec.Prov.014-06"
    },
    {
        "id": 621,
        "descripcion": "Ca.Red.Sec.Prov.014-07"
    },
    {
        "id": 622,
        "descripcion": "Ca.Red.Sec.Prov.014-08"
    },
    {
        "id": 623,
        "descripcion": "Ca.Red.Sec.Prov.014-09"
    },
    {
        "id": 624,
        "descripcion": "Ca.Red.Sec.Prov.014-10"
    },
    {
        "id": 625,
        "descripcion": "Ca.Red.Sec.Prov.014-11"
    },
    {
        "id": 626,
        "descripcion": "Ca.Red.Sec.Prov.014-12"
    },
    {
        "id": 627,
        "descripcion": "Ca.Red.Sec.Prov.014-13"
    },
    {
        "id": 628,
        "descripcion": "Ca.Red.Sec.Prov.014-14"
    },
    {
        "id": 629,
        "descripcion": "Ca.Red.Sec.Prov.014-15"
    },
    {
        "id": 631,
        "descripcion": "Cam.Red.Sec.Prov.014-03"
    },
    {
        "id": 635,
        "descripcion": "Camino 014-03"
    },
    {
        "id": 636,
        "descripcion": "Camino 014-04"
    },
    {
        "id": 637,
        "descripcion": "Camino 014-05"
    },
    {
        "id": 638,
        "descripcion": "Camino 014-06"
    },
    {
        "id": 639,
        "descripcion": "Camino 014-07"
    },
    {
        "id": 640,
        "descripcion": "Camino 014-08"
    },
    {
        "id": 648,
        "descripcion": "COLECTORA RUTA 10"
    },
    {
        "id": 649,
        "descripcion": "COLECTORA RUTA 11"
    },
    {
        "id": 651,
        "descripcion": "COLECTORA RUTA 7"
    },
    {
        "id": 652,
        "descripcion": "COLECTORA RUTA 8"
    },
    {
        "id": 653,
        "descripcion": "COLECTORA RUTA 9"
    },
    {
        "id": 654,
        "descripcion": "COUNTRY CLBU LOS CARDALES"
    },
    {
        "id": 655,
        "descripcion": "COUNTRY CLUB LOS CARDALES"
    },
    {
        "id": 656,
        "descripcion": "DE PAOLI SANTIAGO"
    },
    {
        "id": 670,
        "descripcion": "LA ARBOLADA"
    },
    {
        "id": 672,
        "descripcion": "Las Gardenias"
    },
    {
        "id": 675,
        "descripcion": "LOS CARDALES COUNTRY CLUB"
    },
    {
        "id": 677,
        "descripcion": "LOS RUISEÑORES"
    },
    {
        "id": 688,
        "descripcion": "Roberto Fontanarrosa"
    },
    {
        "id": 694,
        "descripcion": "RUTA PROV. N.° 7"
    },
    {
        "id": 695,
        "descripcion": "RUTA PROV. N.° 8"
    },
    {
        "id": 696,
        "descripcion": "RUTA PROV. N.° 9"
    },
    {
        "id": 702,
        "descripcion": "SECTOR ISLAS"
    }
]