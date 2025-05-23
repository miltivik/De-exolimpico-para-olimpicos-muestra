"use client";

import React, { useState, useEffect } from "react";

interface GoogleDrivePDFViewerProps {
  pdfUrl: string;
  title?: string;
}

function extractIdFromUrl(url: string): string {
  const match = url.match(/\/d\/([\w-]+)/);
  return match ? match[1] : '';
}

const GoogleDrivePDFViewer: React.FC<GoogleDrivePDFViewerProps> = ({
  pdfUrl,
  title = "Vista previa PDF",
}) => {
  const fileId = extractIdFromUrl(pdfUrl);
  
  // Use the Google Drive embed URL directly for reliable viewing
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  
  return (
    <div className="w-full flex flex-col items-center">
      {fileId && (
        <iframe
          src={embedUrl}
          width="100%"
          height="500"
          style={{
            maxWidth: "100%",
            width: "100%",
            background: "#fafafa",
            border: "1px solid #eee",
            borderRadius: "12px",
          }}
          allow="autoplay"
          title={title}
          className="mb-4 w-full rounded-lg shadow"
        />
      )}
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 underline mb-6 text-lg"
      >
        Abrir PDF en nueva pestaña
      </a>
    </div>
  );
};

export default GoogleDrivePDFViewer;
