// src/pages/Collection.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NFTMetadata } from '../types/nft';
import { fetchNFTMetadata } from '../utils/api';

const Collection: React.FC = () => {
 const [nfts, setNfts] = useState<NFTMetadata[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<string | null>(null);
 const [searchTerm, setSearchTerm] = useState('');
 const [page, setPage] = useState(1);
 const itemsPerPage = 24;

 useEffect(() => {
   const loadNFTs = async () => {
     try {
       setLoading(true);
       const data = await fetchNFTMetadata();
       setNfts(data);
     } catch (err) {
       setError('Failed to load NFTs');
     } finally {
       setLoading(false);
     }
   };

   loadNFTs();
 }, []);

 // Improved search functionality
 const filteredNFTs = nfts.filter(nft => {
   if (!searchTerm) return true;
   
   const searchNumber = parseInt(searchTerm);
   if (!isNaN(searchNumber)) {
     return nft.id === searchNumber.toString() || 
            nft.name.includes(searchNumber.toString());
   }
   
   return nft.name.toLowerCase().includes(searchTerm.toLowerCase());
 });

 // Pagination
 const currentlyDisplayed = page * itemsPerPage;
 const paginatedNFTs = filteredNFTs.slice(0, currentlyDisplayed);
 const hasMore = currentlyDisplayed < filteredNFTs.length;

 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
   setSearchTerm(e.target.value);
   setPage(1);
 };

 const handleLoadMore = () => {
   setPage(prev => prev + 1);
 };

 if (loading) {
   return (
     <div className="min-h-screen bg-green-500 flex items-center justify-center">
       <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-pulse">
         <div className="flex items-center space-x-2">
           <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
           <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-100"></div>
           <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-200"></div>
         </div>
       </div>
     </div>
   );
 }

 if (error) {
   return (
     <div className="min-h-screen bg-green-500 flex items-center justify-center">
       <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
         <p className="text-red-500">{error}</p>
         <button 
           onClick={() => window.location.reload()} 
           className="mt-4 bg-lime-300 px-4 py-2 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform"
         >
           Retry
         </button>
       </div>
     </div>
   );
 }

 return (
   <div className="w-full min-h-screen flex flex-col bg-green-500">
     {/* Header Section */}
     <section className="bg-green-600 p-4 sm:p-8">
       <div className="max-w-7xl mx-auto">
         <div className="flex items-center gap-4 mb-4 sm:mb-8">
           <Link to="/">
             <div className="bg-lime-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform">
               <h1 className="text-xl sm:text-2xl font-pixel text-black tracking-wider">RETRO</h1>
             </div>
           </Link>
         </div>
         <div>
           <h2 className="text-3xl sm:text-5xl font-pixel mb-2 sm:mb-4 text-white">Koby Collection</h2>
           <p className="text-lg sm:text-xl text-white/90">3,200 Unique Pixel Art Characters</p>
         </div>
       </div>
     </section>

     {/* Main Content */}
     <section className="flex-grow p-4 sm:p-8">
       <div className="max-w-7xl mx-auto">
         {/* Search */}
         <div className="bg-white p-3 sm:p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-6 sm:mb-8">
           <div className="relative">
             <input 
               type="text" 
               placeholder="Search by name or ID..."
               value={searchTerm}
               onChange={handleSearch}
               className="w-full p-2 sm:p-3 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300 text-sm sm:text-base"
             />
           </div>
         </div>

         {/* NFT Grid */}
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
           {paginatedNFTs.map((nft) => (
             <Link 
               to={`/nft/${nft.id}`}
               key={nft.id}
               className="bg-white rounded-lg overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform"
             >
               <div className="aspect-square bg-gray-100">
                 <img
                   src={nft.image}
                   alt={nft.name}
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     e.currentTarget.src = "/images/placeholder.png";
                   }}
                 />
               </div>
               <div className="p-2 sm:p-4">
                 <h3 className="font-bold text-sm sm:text-lg">{nft.name}</h3>
               </div>
             </Link>
           ))}
         </div>

         {/* Load More */}
         {hasMore && (
           <div className="text-center mt-8 sm:mt-12 mb-4 sm:mb-8">
             <button 
               onClick={handleLoadMore}
               className="bg-lime-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-transform text-sm sm:text-base font-bold"
             >
               Load More ({currentlyDisplayed} of {filteredNFTs.length})
             </button>
           </div>
         )}

         {/* No Results Message */}
         {filteredNFTs.length === 0 && (
           <div className="text-center py-8 sm:py-12">
             <p className="text-white text-lg sm:text-xl">No NFTs found for "{searchTerm}"</p>
           </div>
         )}
       </div>
     </section>
   </div>
 );
};

export default Collection;