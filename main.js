function getValuesFromColumn(columnName) {
    var table = document.querySelector('table');

    if (!table) {
        console.error("Таблицю не знайдено!");
        return;
    }

    var columnIndex = -1;
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        if (table.rows[0].cells[i].textContent === columnName) {
            columnIndex = i;
            break;
        }
    }

    if (columnIndex === -1) {
        console.error("Стовпець не знайдено!");
        return;
    }

    var values = [];

    for (var i = 1; i < table.rows.length; i++) {
        var cell = table.rows[i].cells[columnIndex];
        values.push(cell.textContent);
    }
    return values;
}

var tempetureColumnName = "TMPMAX";
var values = getValuesFromColumn(tempetureColumnName);
var maxTemp = Math.max(...values.filter(value => value.trim() !== "").map(value => parseFloat(value)));

console.log("Максимальна температура = " + maxTemp);

var maxTempIndex = values.indexOf(maxTemp.toString());

var dateColumnName = "DATE_OBS";
var dateValues = getValuesFromColumn(dateColumnName);
var date = dateValues[maxTempIndex];

console.log("Дата = " + date);