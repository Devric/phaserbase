interface iRay {
    origin?: Phaser.Geom.Point,
    angle?: number,
    angleDeg?: number,
    cone?: number,
    coneDeg?: number,
    range?: number,
    collisionRnage?: number,
    detectionRange?: number,
    ignoreNotIntersectedRays?: number,
    autoSlice?: number,
    round?: number
}

interface iRayCasterOptions {
    scene?: Phaser.Scene,
    mapSegmentCount?: number,
    objects?: [] | {},
    boundingBox?: Phaser.Geom.Rectangle,
    autoUpdate?: boolean
}

interface iRayMap {
    object: any
    type?: string
    dynamic?: boolean
    segmentCount?: number
    active?:boolean
}

declare class RayMap {
    readonly type: string
    active: boolean
    dynamic: boolean
    readonly object: any

    constructor(options?: iRayMap, raycaster?:Raycaster)
    getPoints(ray?: Ray): Phaser.Geom.Point[]
    getSegments(ray?: Ray): Phaser.Geom.Line[]
    updateMap(): RayMap
    config(options?: iRayMap): RayMap
    setSegmentCount(count: number): RayMap
    setCollisionTiles(tiles?: []): RayMap
}

declare class Ray {
    origin?: Phaser.Geom.Point
    angle?: number
    angleDeg?: number
    cone?: number
    coneDeg?: number
    range?: number
    collisionRnage?: number
    detectionRange?: number
    ignoreNotIntersectedRays?: number
    autoSlice?: number
    round?: number
    body?: {[k:string]:any} | boolean

    constructor(options?: iRay, raycaster?: Raycaster)
    config(options: iRay): Ray
    cast(options?: []): Phaser.Geom.Point | boolean
    castCircle(objects:{[k:string]:any}[]): Phaser.Geom.Point[]
    castCone(objects:{[k:string]:any}[]): Phaser.Geom.Point[]
    setRay(x:number,y:number,angle?:number, range?: number): Ray
    setOrigin(x:number, y:number): Ray
    setAngle(angle:number): Ray
    setAngleDeg(deg:number): Ray
    setRayRange(rayRange?: number): Ray
    setDetectionRange(range?:number):Ray
    setCollisionRange(range?:number):Ray
    boundsInRange(objects:{[k:string]:any}, bounds?: Phaser.Geom.Rectangle | boolean): boolean
    setCone(radians?:number): Ray
    setConeDeg(degrees?:number): Ray
    overlap(objects:{[k:string]:any}[]):{[k:string]:any}[]
    processOverlap(object1: any, object2: any):boolean
    enablePhysicsBody():Ray
}

declare class Raycaster {
    readonly version: string
    mappedObjects: []
    mapSegmentCount: number

    constructor(options: iRayCasterOptions)

    setOptions(options?: iRayCasterOptions): Raycaster
    setBoundingBox(x:number, y:number, width:number, height:number): Raycaster
    mapGameObjects(objects: any | [], dynamic?: boolean, options?: any): Raycaster
    removeMappedObjects(obj: {[k:string]:any} | []): Raycaster
    enableMaps(obj: {[k:string]:any} | []): Raycaster
    disableMaps(obj: {[k:string]:any} | []): Raycaster

    /* update all Raycaster.Map */
    update():void

    createRay(options?: iRay): Ray
}

