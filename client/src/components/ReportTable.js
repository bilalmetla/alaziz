import React, {useState} from 'react';
import {  Form, Button } from "react-bootstrap";



export const ReportTable = (props) => {

    const mapTableData = (list) => {
        if (!list || list.length === 0) {
            return
        }
        return list.map((buyer, index) => {
           // buyer.invoice.map(inv => {
           return buyer.invoice.items.map(item => {
                    return <tr key={`row-${index}`}>{
                        props.keys.map((key, keyIndex) => {
                            let value = item[key.source]
                            if (!value) {
                                value = buyer[key.source] 
                            }
                            if (!value) {
                                value = buyer.invoice[key.source]
                            }
                            return <td key={`key-${keyIndex}`}> {value}</td>;
                         })
                    }
                        </tr>
               // })
            })
          
        })

    }

    function downloadCSV(csv, filename) {
        var csvFile;
        var downloadLink;
    
        // CSV file
        csvFile = new Blob([csv], {type: "text/csv"});
    
        // Download link
        downloadLink = document.createElement("a");
    
        // File name
        downloadLink.download = filename;
    
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
    
        // Hide download link
    downloadLink.style.display = "none";
    
        // Add the link to DOM
        document.body.appendChild(downloadLink);
    
        // Click download link
        downloadLink.click();
    }

    function exportTableToCSV(filename) {
        var csv = [];
      //  var header = document.querySelectorAll("table th");
        var rows = document.querySelectorAll("table tr");
        
        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            
            for (var j = 0; j < cols.length; j++) 
                row.push(cols[j].innerText);
            
            csv.push(row.join(","));        
        }
    
        // Download CSV file
        downloadCSV(csv.join("\n"), filename);
    }



    return (
        <>
            {
                    
                    <div className="space-between">
                    <h3>{ props.title}</h3>
                    </div>
                        
                }

            {
                props.data && props.data.length > 0 &&
                <Button onClick={()=>exportTableToCSV(`${props.title}-${new Date().getMonth()+1}.csv`)}> Excel File</Button>

            }
                      <table responsive>
                <thead>
                    <tr>
                                    {
                                        props.keys.map((key, index) => {
                                            return <th>
                                                <td key={`heading-${index}`}>{ key.label }</td>
                                            </th>
                                        })
                        }
                    </tr>
                                </thead>
                                 <tbody>
                                     {
                                        mapTableData(props.data)
                                     }
                             </tbody>
                         </table>
                

        </>
    )
}