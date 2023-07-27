import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

type TitletProps = { title: string };

function Title({ title }: TitletProps) {
  const [editing, setEditing] = useState(true);
  const [titleName, setTitleName] = useState(title);

  return (
    <div className='flex items-center gap-3'>
      {
        editing ? <h3>{ titleName }</h3> : (
          <input
            id='123'
            type="text"
            value={ titleName }
            onChange={ (e) => setTitleName(e.target.value) }
            onBlur={ () => setEditing(!editing) }
            onFocus={ (e) => e.target.select() }
            className='bg-white'
          />
        )
      }
      <AiOutlineEdit onClick={ () => setEditing(!editing) } />
    </div>
  );
}

export default Title;
