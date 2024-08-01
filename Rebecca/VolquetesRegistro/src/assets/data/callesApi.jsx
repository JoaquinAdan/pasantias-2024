// export const fCalles= async () => {
//     try {
//         const response = await fetch('https://testiis01.campana.gov.ar/Municipalidad.Campana.Api/api/commons/calles');
//         const data = await response.json();
//         console.log(response, data)
//         const frameworks = data.map(item => ({
//           value: item.id,
//           label: item.descripcion
//         }));
//         return frameworks;
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
