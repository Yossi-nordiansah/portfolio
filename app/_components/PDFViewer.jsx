import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


// export default function PDFViewer({ url, height = "80vh" }) {
//     const defaultLayoutPluginInstance = defaultLayoutPlugin();
//     return (
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//             <div className={`w-full h-[${height}]`}>
//                 <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
//             </div>
//         </Worker>
//     );
// }

export default function PDFViewer({ url, height = "80vh" }) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div style={{ height }} className="w-full overflow-y-auto">
                <Viewer
                    fileUrl={url}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </div>
        </Worker>
    );
}
