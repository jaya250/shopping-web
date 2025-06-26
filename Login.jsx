import { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl transition-all duration-500">
        {/* Title and subtitle */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-purple-600">
            {isLogin ? 'Login to your account' : 'Create your account'}
          </h1>
          
        </div>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-2.5 text-sm text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle Link */}
        <p className="text-sm text-center mt-6">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="text-purple-600 hover:underline font-medium"
          >
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

























// import React, { useState } from 'react';
// import { FaUser, FaLock, FaEnvelope, FaExclamationCircle, FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
// import { RiShieldKeyholeLine } from 'react-icons/ri';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [authError, setAuthError] = useState('');
//   const navigate = useNavigate();

//   // Create Axios instance with base URL
//   const api = axios.create({
//     baseURL: 'http://localhost:5000/api/auth',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   const validate = () => {
//     const newErrors = {};
    
//     if (!isLogin && !formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }
    
//     if (!isLogin && formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: null
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setAuthError('');
    
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
    
//     setIsLoading(true);
    
//     try {
//       const endpoint = isLogin ? '/login' : '/signup';
//       const body = isLogin 
//         ? { email: formData.email, password: formData.password }
//         : {
//             name: formData.name,
//             email: formData.email,
//             password: formData.password
//           };
      
//       const { data } = await api.post(endpoint, body);
      
//       // Store token and user data
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));
      
//       // Redirect to dashboard
//       navigate('/dashboard');
      
//     } catch (error) {
//       // Axios error handling
//       const errorMessage = error.response?.data?.message 
//         || error.message 
//         || 'An error occurred during authentication';
//       setAuthError(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         {[...Array(10)].map((_, i) => (
//           <div 
//             key={i}
//             className="absolute rounded-full bg-white bg-opacity-10"
//             style={{
//               width: `${Math.random() * 100 + 50}px`,
//               height: `${Math.random() * 100 + 50}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md backdrop-blur-sm bg-opacity-90">
//         {/* Decorative header */}
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
//           <div className="flex items-center justify-center mb-2">
//             <RiShieldKeyholeLine className="text-3xl mr-2" />
//             <h1 className="text-2xl font-bold">SecureAuth</h1>
//           </div>
//           <p className="text-center text-blue-100 text-sm">
//             {isLogin ? 'Sign in to access your account' : 'Join our community today'}
//           </p>
//         </div>
        
//         {/* Toggle tabs */}
//         <div className="flex border-b">
//           <button
//             className={`flex-1 py-4 font-medium transition-colors ${isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setIsLogin(true)}
//           >
//             Login
//           </button>
//           <button
//             className={`flex-1 py-4 font-medium transition-colors ${!isLogin ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setIsLogin(false)}
//           >
//             Sign Up
//           </button>
//         </div>
        
//         <div className="p-8">
//           <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//             {isLogin ? 'Welcome Back!' : 'Create Your Account'}
//           </h2>
          
//           {authError && (
//             <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center animate-pulse">
//               <FaExclamationCircle className="mr-2" />
//               {authError}
//             </div>
//           )}
          
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {!isLogin && (
//               <div>
//                 <label className="block text-gray-700 mb-1 font-medium">Full Name</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                     <FaUser />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="John Doe"
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
//                   />
//                 </div>
//                 {errors.name && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.name}</p>}
//               </div>
//             )}
            
//             <div>
//               <label className="block text-gray-700 mb-1 font-medium">Email</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <FaEnvelope />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your@email.com"
//                   className={`w-full pl-10 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.email}</p>}
//             </div>
            
//             <div>
//               <label className="block text-gray-700 mb-1 font-medium">Password</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                   <FaLock />
//                 </div>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="••••••••"
//                   className={`w-full pl-10 pr-4 py-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
//                 />
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.password}</p>}
//             </div>
            
//             {!isLogin && (
//               <div>
//                 <label className="block text-gray-700 mb-1 font-medium">Confirm Password</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                     <FaLock />
//                   </div>
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     placeholder="••••••••"
//                     className={`w-full pl-10 pr-4 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
//                   />
//                 </div>
//                 {errors.confirmPassword && <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.confirmPassword}</p>}
//               </div>
//             )}
            
//             {isLogin && (
//               <div className="flex justify-between items-center">
//                 <label className="flex items-center">
//                   <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
//                   <span className="ml-2 text-gray-700">Remember me</span>
//                 </label>
//                 <button type="button" className="text-sm text-blue-600 hover:underline">
//                   Forgot password?
//                 </button>
//               </div>
//             )}
            
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg'} transform hover:scale-[1.01]`}
//             >
//               {isLoading ? (
//                 <span className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   {isLogin ? 'Logging in...' : 'Creating account...'}
//                 </span>
//               ) : (
//                 isLogin ? 'Log In' : 'Sign Up'
//               )}
//             </button>
//           </form>
          
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>
            
//             <div className="mt-4 grid grid-cols-3 gap-3">
//               <button 
//                 type="button" 
//                 className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 <FaGoogle className="text-red-500" />
//               </button>
//               <button 
//                 type="button" 
//                 className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 <FaGithub className="text-gray-800" />
//               </button>
//               <button 
//                 type="button" 
//                 className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors"
//               >
//                 <FaFacebook className="text-blue-600" />
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-gray-50 px-8 py-4 text-center">
//           <p className="text-gray-600">
//             {isLogin ? "Don't have an account? " : "Already have an account? "}
//             <button 
//               onClick={() => setIsLogin(!isLogin)} 
//               className="text-blue-600 font-medium hover:underline"
//             >
//               {isLogin ? 'Sign up' : 'Log in'}
//             </button>
//           </p>
//         </div>
//       </div>
      
//       {/* Global styles for animations */}
//       <style jsx global>{`
//         @keyframes float {
//           0% { transform: translateY(0) rotate(0deg); opacity: 1; }
//           100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(-5px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default AuthPage;