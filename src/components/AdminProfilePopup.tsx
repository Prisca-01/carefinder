import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';

type ProfileData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  photoURL?: string;
};

interface AdminProfilePopupProps {
  onClose: () => void;
  isOpen: boolean;
}

const AdminProfilePopup: React.FC<AdminProfilePopupProps> = ({
  onClose,
  isOpen,
}) => {
  const [adminData, setAdminData] = useState<ProfileData | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const auth = getAuth();

  useEffect(() => {
    const fetchAdminData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAdminData(docSnap.data() as ProfileData);
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchAdminData();
  }, [auth]);

  const handleSave = async (updatedData: ProfileData) => {
    if (!auth.currentUser) return;

    try {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), updatedData);
      setAdminData(updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile.');
    }
  };

  if (!adminData) return <div>Loading...</div>;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md shadow-lg relative max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="mt-4">
          <ViewProfile
            adminData={adminData}
            onClose={onClose}
            onEditClick={() => setIsEditing(true)}
          />
          {isEditing && (
            <EditProfile
              adminData={adminData}
              onClose={() => setIsEditing(false)}
              onSave={handleSave}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePopup;
