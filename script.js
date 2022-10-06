let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

let data= [
    {DataType:'Time elapse:', Reading:'17 seconds'},
    {DataType:'Latitude:', Reading:'0 degree'},
    {DataType:'Longitude:', Reading:'0 degree'},
    {DataType:'GPS Altitude:', Reading:'0 feet'},
    {DataType:'BMP Sensor Altitude:', Reading:'31556.14 feet'},
    {DataType:'BMP Sensor Pressure:', Reading:'2.34 HPa'},
    {DataType:'BMP Sensor Temperature:', Reading:'0 degrees Fahrenheit'},
    {DataType:'Digital Sensor Temperature:', Reading:'24.12 degrees Fahrenheit'},
    {DataType:'CSS Sensor Temperature:', Reading:'25 degrees Fahrenheit'},
    {DataType:'CSS Sensor eCO2:', Reading:'400'},
    {DataType:'CSS Sensor TVOC:', Reading:'0'},
    {DataType:'UV:', Reading:'0'},
    {DataType:'Accel X:', Reading:'-0.87'},
    {DataType:'Accel Y:', Reading:'-0.02'},
    {DataType:'Accel Z:', Reading:'9.61'},
    {DataType:'Magnetic X:', Reading:'0.13'},
    {DataType:'Magnetic Y:', Reading:'0.57'},
    {DataType:'Magnetic Z:', Reading:'-0.24'},
    {DataType:'Gyro X:', Reading:'4.66'},
    {DataType:'Gyro Y:', Reading:'0.01'},
    {DataType:'Gyro Z:', Reading:'-0.4'}
]
let headers = ['DataType','Reading'];
btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText)
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    data.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text)
        cell.appendChild(textNode);
        row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
});