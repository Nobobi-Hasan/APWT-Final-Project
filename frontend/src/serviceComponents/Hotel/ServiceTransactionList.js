import Service from './ServiceTransaction';
import '../Service.css';

import { PDFExport } from "@progress/kendo-react-pdf";
import {useRef} from 'react';

const ServiceTransactionList = ({list})=>{
    console.log(list);

    const pdfExportComponent = useRef(null);

    const handleExportWithComponent = (event =>{
        pdfExportComponent.current.save();
        console.log("clicked");
    })

    return(
    <>
        <button className = "PDFFDownload" onClick={handleExportWithComponent}><i class="fa fa-download" aria-hidden="true"></i></button>

        <PDFExport ref = {pdfExportComponent} paperSize = "A2">
                <div>
                    <table id='table'>

                        <th>Id</th>
                        <th>Date</th>
                        <th>Receiver Id</th>
                        <th>Receiver</th>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Amount</th>

                        {
                            list.map((service)=>{

                                
                                    return <Service {...service} />
                            
                            })
                        }
                        
                    </table>
                </div>
        </PDFExport>
        
    </>
        
    )
}

export default ServiceTransactionList;