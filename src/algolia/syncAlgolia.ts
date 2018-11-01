import { fromEvent, FunctionEvent } from 'graphcool-lib'

// interface EventData {
//   email: string
//   password: string
// }

export default async (event: FunctionEvent<any>) => {
  console.log(event)
}