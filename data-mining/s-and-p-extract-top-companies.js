const tables = document.getElementsByClassName('table');
Array.from(tables[0].getElementsByTagName('tr'))
    .filter(tr => tr.getElementsByTagName('td')[0])
    .map(tr => { 
        const data = Array.from(tr.getElementsByTagName('td')); 
        return [data[0], data[1], data[2], data[3]]
    .map(td => td.innerText); })
    .map(row => row.join(','))
    .join("\n");
