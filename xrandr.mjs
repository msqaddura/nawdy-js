import  {spawn}  from "child_process"
export class Xrandr {

    static async getAllMonitors(){
        const screens = []
        const xrandr = spawn('xrandr')
        const grep = spawn('grep',['connected'])
        
        xrandr.stdout.pipe(grep.stdin)
        for await (const data of grep.stdout) {
            return data.toString().split("\n").filter(_=>_);
          };
        }
    static async getConnectedMonitors(){
        return await this.getAllMonitors().then( monitors=>{
            return monitors.filter(monitor=>monitor.indexOf('disconnected')===-1)
        })
    }
}
