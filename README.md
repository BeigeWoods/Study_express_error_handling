## Study about `throw` with library to handle exception.

### `throw` _expression_

*expression*에 일반 문장을 적용할 수 있으며, 스택 추적이 필요하다면 Error객체를 사용한다.  
새로운 Error객체를 사용한 지점부터 스택 추적이 이뤄진다.
이때, 외부 라이브러리에서 발생한 예외를 catch하여 처리할 때는 주의해야 한다.  
새로운 Error객체를 생성하면 catch한 Error객체의 일부 정보를 소실할 수 있기 때문이다.  
스택 추적 내용이 아예 달라진다는 것도 명심하자.

A normal sentences can apply on _expression_ and use Error objects if you want to trace stack.  
A stack will be traced from where the objects is used.  
But be careful of handling a exception or error came from external module.  
A partial information of those will be lost when new Error objects is created for error handling.  
Keep in mind a content of traced stack also will be completely different.

### express-async-errors

라이브러리는 모든 `throw`문은 다 처리한다고 설명한다.
The library explains that can handle all `throw` statement.

> [If you want to pass an error, just throw a normal exception](https://www.npmjs.com/package/express-async-errors)
