import React, { useEffect, useRef, useState } from 'react';
import {
  IconMoodSmile,
  IconAt,
  IconHash,
} from '@tabler/icons';
import DomEmojiFaces from '@/components/EmojiFaces';

const DomFace = ({ handleInset }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setVisibility(!visibility)}
        type="button"
        className="block ui_text_black_hover"
      >
        <IconMoodSmile size={20} stroke={1} />
      </button>
      {
        visibility
        && (
          <div className="absolute mt-2 left-0">
            <DomEmojiFaces {...{ handleHide: () => setVisibility(false), clickface: handleInset }} />
          </div>
        )
      }
    </div>
  );
};

export default () => {
  const [data, setData] = useState('');
  const refSelection = useRef(window.getSelection());
  const refRange = useRef();
  const refText = useRef();
  const handleSelect = () => {
    refRange.current = refSelection.current.getRangeAt(0);
    console.log(refRange);
    const { startOffset, collapsed } = refRange.current;
    // if (collapsed && startOffset > 0) {
    //   console.log(startOffset);
    //   const range = document.createRange();
    //   range.setStart(refText.current, 0);
    //   range.setEnd(refText.current, 1);
    //   console.log(range.toString());
    // }
    // console.log(refRange);
  };

  const handleInsetEmoji = (val) => {
    // refRange.current.insertNode(document.createTextNode(val));
    document.execCommand('insertText', false, val);
  };
  useEffect(() => {
  }, []);
  return (
    <div className="write">
      <div
        ref={refText}
        contentEditable="true"
        className="h-20 border bg-white rounded focus:outline-none px-3 py-1"
        onSelect={handleSelect}
      >
        { }
      </div>
      <div className="help flex mt-2">
        <div className="flex space-x-2 items-center">
          <DomFace handleInset={handleInsetEmoji} />
          <button type="button" className="ui_text_black_hover">
            <IconAt size={20} stroke={1} />
          </button>
          <button type="button" className="ui_text_black_hover">
            <IconHash size={20} stroke={1} />
          </button>
        </div>
        <button
          className="ml-auto border border-gray-400 px-4 py-1 rounded-full hover:bg-gray-300"
          type="button"
        >
          评论
        </button>
      </div>
    </div>
  );
};
