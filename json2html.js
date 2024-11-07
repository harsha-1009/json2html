export default function json2html(data) {
    let html = `<table data-user="dsreeharsha123@gmail.com">
                    <thead>
                        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                    </thead>
                    <tbody>`;
    data.forEach(person => {
        html += `<tr>
                    <td>${person.Name || ''}</td>
                    <td>${person.Age || ''}</td>
                    <td>${person.Gender || ''}</td>
                </tr>`;
    });
    html += </tbody></table>;
    return html; 
}
