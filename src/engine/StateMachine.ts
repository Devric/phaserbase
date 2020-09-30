export interface iStateArgs {
    scene: Phaser.Scene,
    ref: any,           // scene are also referenced under ref object
    stateData: any
}

enum eExecutionState {
    INACTIVE,
    ACTIVE,
    DONE
}

/**
 * 1. ENTER (one off excecution) > do the stuff this state ment to do
 * 2. EXECUTE (update game loop) >  this is the LISTEN update logic ready to transition to next state when X is heared 
 * 3. EXIT(one off excecution) > when its finished, such as set parameter, variables to null 
 */

export abstract class State {
    excecutionState: eExecutionState
    stateMachine: StateMachine
    readonly _stateName: string

    constructor(name?: string) {
        this._stateName = name
    }

    // TODO this should be a promise if we want to have animation done,complete
    // This sets
    enter(stateArgs: iStateArgs):void {
        this.excecutionState = eExecutionState.ACTIVE
        console.log("enter:" + ` ${this._stateName}` )
    }

    // TODO this should be a promise if we want to have animation done,complete
    // This checks flags and depending on the input ( flag, keypress )
    // Start preparing transition
    // @example
    // excecute() {
    //      if ( keyboard.SPACE.isDOWN ) {
    //          this.stateMachine.transition('fire')
    //      }
    //      if ( keyboard.Left.isDOWN || keyboard.right.isDOWN ) {
    //          this.stateMachine.transition('move')
    //      }
    // }
    excecute(stateArgs: iStateArgs):void { 
        console.log("excecute:" + ` ${this._stateName}` )
    }

    // TODO this should be a promise if we want to have animation done,complete
    exit(stateArgs: iStateArgs):void {
        this.excecutionState = eExecutionState.DONE
        console.log("exit:" + ` ${this._stateName}` )
    }
}

export class StateMachine {
    state: string
    prev_state: string
    constructor(
        public initialState   : string,
        public possibleStates : {[state: string]:State},
        public stateArgs      : iStateArgs
    ) {
        this.state = null

        // allow State instace have acces to statemachine
        for (const state of Object.values(this.possibleStates)) {
            state.stateMachine = this
        }
    }

    step() {
        this._initialStateSetup()

        // excecute current state
        this.possibleStates[this.state].excecute(this.stateArgs)
    }

    /**
     * Used by State.Excecute
     * This acts as placeholder for the next state before it will get excecuted via step()
     *
     * @param newState String
     * i.e idle, move
     *
     * @param enterArgs: Object
     * additional args that will be merged into stateData
     *
     * @param ignoreRepeat: Boolean
     * if we want to go back to the same state.enter(), provide this ignore flag to true
     *
     * @Example
     * excecute() {
     *  this.stateMachine.transition(stateName)
     * }
     */
    transition(newState: string, enterArgs?:any, ignoreRepeat:boolean=false): StateMachine {
        this.prev_state = this.state
        if (this.state === newState && !ignoreRepeat) return
        if (!this.possibleStates[newState]) throw new Error(`State: ${newState} not found`)

        this.possibleStates[this.state].exit(this.stateArgs)
        this.state = newState

        this.stateArgs.stateData = {...this.stateArgs.stateData, ...enterArgs}
        this.possibleStates[this.state].enter(this.stateArgs)
        return this
    }

    // adding new states
    addStates(states: {[state: string]:State}) {
        this.possibleStates = { ...this.possibleStates, ...states }
    }

    // on the first setup, push the intial state to 
    // the transition to be prepared for step()
    private _initialStateSetup():void {
        // default state
        if (this.state === null) {
            this.state = this.initialState
            this.possibleStates[this.state].enter(this.stateArgs)
        }
    }
}
