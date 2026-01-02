"use client";
import PDFViewer from "@/app/_components/PDFViewer";
export default function Muatmuat() {
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="relative w-[95%] md:w-4/5 h-[80%] bg-white rounded-lg overflow-hidden shadow-lg">
                <button
                    onClick={() => setShowResume(false)}
                    className="absolute top-10 right-0 z-50 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                    ✕
                </button>
                <PDFViewer url="/pdf/experience letter PT AZlogistik Dot Com.pdf" />
            </div>
        </div>
    );
}


