

const Input = ({ id, label, type,pattern, ...props }) => {
    
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-600 font-semibold mb-2">{label}</label>
            <input 
                type={type} 
                id={id} 
                name={id} 
                // maxlength={maxlength}
                pattern={pattern}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                autoComplete="off"
                {...props}
            />
        </div>
    );
}

export default Input;