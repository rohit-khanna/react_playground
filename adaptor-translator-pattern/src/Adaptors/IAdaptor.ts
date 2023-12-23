export interface IAdaptor<Input, Output> {

    /**
     * transform data from Input to Output.
     * @param data 
     */
    tranform(data: Input): Output;
}