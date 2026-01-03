"use client";
import PDFViewer from "@/app/_components/PDFViewer";
export default function Muatmuat() {
    return (
        <div style={{ backgroundImage: 'url("/images/bg.jpg")' }} className="min-h-screen w-full bg-cover bg-no-repeat relative z-50">
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative w-[95%] md:w-4/5 h-[90%] bg-white rounded-lg overflow-hidden shadow-lg">
                    <PDFViewer url="/pdf/experience letter PT AZlogistik Dot Com.pdf" height="90vh" />
                </div>
            </div>
        </div>
    );
}


