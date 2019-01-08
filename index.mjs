import { Xrandr } from './xrandr'

Xrandr.getConnectedMonitors().then(screens=>console.log(screens))