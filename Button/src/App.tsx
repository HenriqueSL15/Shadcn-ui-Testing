import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "./components/ui/button"

function App() {
  let i = 5;
  return (
    <div className="flex items-center justify-center h-screen">
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-slate-900">Botão para ativar um alerta</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Este botão é útil?</AlertDialogTitle>
          <AlertDialogDescription>
            Responda com base no conhecimento prévio(e futuro, se puder).
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Muito!</AlertDialogCancel>    
          <AlertDialogAction>De fato, é muito útil!</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}

export default App
