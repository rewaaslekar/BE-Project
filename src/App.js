// import logo from './logo.svg';
import './App.css';
import header from './header';


function App() {
  return (
    
      <header className="ui-container">
       <h1>Hello World</h1>
      
<div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
    <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                Login
            </a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active " aria-current="page">
                Register
            </a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
                Connect to Wallet
            </a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">
              About Us
            </a>
        </li>
    </ul>
</div>

       
  </header>

      
    
  );
}

export default App;
