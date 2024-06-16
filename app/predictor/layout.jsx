import Button from "../components/Button";

const PredLayout = ({children}) => {
    return ( 
        <main className="flex flex-col h-full px-8 py-6 pb-4 border gap-6">
            <Button className="bg-transparent border-none px-0 text-gray-300 hover:bg-transparent hover:underline hover:underline-offset-3 hover:scale-100" route="back">{"< Back"}</Button>
            {children}
        </main>
     );
}
 
export default PredLayout;