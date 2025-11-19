"use client";

import mixpanel from "mixpanel-browser";
import { useGoogleAnalytics } from "../hooks/useGoogleAnalytics";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { trackModal } = useGoogleAnalytics();

  if (!isOpen) return null;

  const handleClose = () => {
    mixpanel.track("Modal Closed", {
      modal: "Contact",
      duration: "N/A"
    });
    trackModal('contact', 'close');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Contactez Gabrielle</h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-xl">📞</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Téléphone</h4>
              <a 
                href="tel:0619187433" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                06 19 18 74 33
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-xl">✉️</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <a 
                href="mailto:gabrielle.nicolini@cesaretbrutus.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                gabrielle.nicolini@cesaretbrutus.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-xl">🕒</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Horaires</h4>
              <p className="text-gray-600">Lun-Ven : 9h-19h<br />Sam : 9h-13h</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            N&apos;hésitez pas à me contacter pour discuter de votre projet immobilier !
          </p>
        </div>
      </div>
    </div>
  );
};

