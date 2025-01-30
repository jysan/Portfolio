const Test = () => {
    return (
      <div className="w-full h-screen flex flex-col divide-y divide-gray-300">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex-1 flex items-center justify-center p-4">
            <div className="text-center">
              <img 
                src={`https://via.placeholder.com/150`} 
                alt={`Image ${item}`} 
                className="mx-auto mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-2">Titre {item}</h2>
              <p className="text-gray-500">Date: 2024-01-30</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Test;