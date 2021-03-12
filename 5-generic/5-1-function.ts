{
  function checkNotNull<T>(arg: T | null ): T {
    if(arg == null){
      throw new Error('not a vaild type');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
