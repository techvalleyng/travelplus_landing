import { useLocation } from "react-router"

export default function NotFound() {
    const location = useLocation();
  return (
    <div>
    
        <h1 className="text-4lx"><span className="text-red-500">404</span> - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>No match for <strong className="font-bold text-2xl">{location.pathname}</strong></p>
    </div>
  )
}
