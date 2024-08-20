// import { useEffect, useState } from 'react';
// import { getAuth } from 'firebase/auth';
// import { collection, query, where, getDocs,} from 'firebase/firestore';
// import { app } from '../../utils/firebaseConfig';

// const ViewEntries = () => {
//   const [entries, setEntries] = useState([]);
//   const auth = getAuth();

//   useEffect(() => {
//     const fetchEntries = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         const q = query(
//           collection(db, 'hospitals'),
//           where('uid', '==', user.uid)
//         );

//         const querySnapshot = await getDocs(q);
//         const fetchedEntries = [];
//         querySnapshot.forEach((doc) => {
//           fetchedEntries.push({ id: doc.id, ...doc.data() });
//         });
//         setEntries(fetchedEntries);
//       }
//     };

//     fetchEntries();
//   }, [auth.currentUser]);

//   return (
//     <div className="container mx-auto py-6">
//       <h2 className="text-2xl font-semibold mb-4">My Hospital Entries</h2>
//       <ul>
//         {entries.map((entry) => (
//           <li key={entry.id} className="mb-4 p-4 border rounded-md shadow-sm">
//             <h3 className="text-lg font-semibold">{entry.name}</h3>
//             <p>{entry.address}</p>
//             <p>{entry.city}, {entry.state}</p>
//             {/* Add edit and delete buttons here */}
//             <div className="mt-2 flex">
//               <button
//                 onClick={() => handleEdit(entry.id)}
//                 className="mr-2 text-blue-600 hover:underline"
//               >
//                 <FaEdit className="inline-block mr-1" /> Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(entry.id)}
//                 className="text-red-600 hover:underline"
//               >
//                 <FaTrash className="inline-block mr-1" /> Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewEntries;
