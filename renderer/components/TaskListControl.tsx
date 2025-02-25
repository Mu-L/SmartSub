import { Import, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { LogDialog } from './LogDialog';

const TaskListControl = ({ setFiles }) => {
  const { t } = useTranslation(['home', 'common']);
  const [showLogs, setShowLogs] = useState(false);

  const handleImportVideo = async () => {
    window?.ipc?.send('openDialog', 'openDialog');
  };

  const handleClearList = () => {
    window.ipc.send('clearTasks', []);
    setFiles([]);
  };

  return (
    <>
      <div className="align-middle items-center flex justify-end">
        <Button
          className="text-sm"
          size="sm"
          variant="outline"
          onClick={() => setShowLogs(true)}
        >
          <FileText className="size-5 mr-2" />
          {t('common:viewLogs')}
        </Button>
        <Button
          className="text-sm ml-4"
          size="sm"
          variant="outline"
          onClick={handleClearList}
        >
          {t('clearList')}
        </Button>
        <Button
          className="text-sm ml-4"
          size="sm"
          variant="outline"
          onClick={handleImportVideo}
        >
          <Import className="size-5 mr-2" />
          {t('importFiles')}
        </Button>
      </div>

      <LogDialog open={showLogs} onOpenChange={setShowLogs} />
    </>
  );
};

export default TaskListControl;
